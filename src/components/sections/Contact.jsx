import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const form = useRef()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState(null) // null | 'success' | 'error'

    const sendEmail = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus(null)

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        const SERVICE_ID = 'YOUR_SERVICE_ID'
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setStatus('success')
                    form.current.reset()
                },
                (error) => {
                    console.error('FAILED...', error.text)
                    setStatus('error')
                },
            )
            .finally(() => {
                setIsSubmitting(false)
            });
    }

    return (
        <section id="contact" className="py-[60px] md:py-[80px] px-6 md:px-12 lg:px-24 bg-white dark:bg-[#050505]">
            <div className="max-w-[600px] mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-[#111111] dark:text-white tracking-tight">
                        Get in Touch
                    </h2>
                    <p className="text-[#6b6b6b] dark:text-[#888888] text-[17px] leading-relaxed">
                        Have a question or want to work together? Send me a message!
                    </p>
                </div>

                {/* Form */}
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="user_email" className="text-sm font-medium text-[#111111] dark:text-white">Email</label>
                            <Input
                                id="user_email"
                                name="user_email"
                                type="email"
                                placeholder="john@example.com"
                                required
                                className="h-12 rounded-xl border-gray-200 dark:border-[#333333] bg-white dark:bg-[#111111] text-[#111111] dark:text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#111111] dark:focus-visible:ring-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="company_name" className="text-sm font-medium text-[#111111] dark:text-white">Company Name</label>
                            <Input
                                id="company_name"
                                name="company_name"
                                type="text"
                                placeholder="Acme Corp"
                                className="h-12 rounded-xl border-gray-200 dark:border-[#333333] bg-white dark:bg-[#111111] text-[#111111] dark:text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#111111] dark:focus-visible:ring-white"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-[#111111] dark:text-white">Message</label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Type your message here..."
                            className="min-h-[150px] rounded-xl border-gray-200 dark:border-[#333333] bg-white dark:bg-[#111111] text-[#111111] dark:text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#111111] dark:focus-visible:ring-white resize-none"
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 rounded-full text-[16px] font-medium bg-[#111111] hover:bg-[#333333] text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black transition-colors duration-300 disabled:opacity-50"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    {status === 'success' && (
                        <p className="text-green-600 text-center font-medium">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 text-center font-medium">Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Contact
