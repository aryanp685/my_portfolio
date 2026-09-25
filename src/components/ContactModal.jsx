import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  Send,
  User,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { CONTACT_EMAIL, OPEN_CONTACT_EVENT } from "../lib/contact";

const initialForm = { name: "", email: "", message: "" };

const fieldClasses =
  "w-full rounded-xl bg-white/5 border border-white/20 pl-11 pr-4 py-3 text-white placeholder:text-gray-500/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all";

const labelClasses =
  "block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2";

const parseResponse = async (res) => {
  const data = await res.json().catch(() => null);
  if (!data) return { ok: false, message: "", unusable: true };
  return {
    ok: res.ok && String(data.success).toLowerCase() === "true",
    message: data.message || "",
    unusable: false,
  };
};

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener(OPEN_CONTACT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONTACT_EVENT, open);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const payload = {
      name: form.name,
      email: form.email,
      message: form.message,
      _subject: `Portfolio message from ${form.name}`,
      _template: "table",
      _captcha: "false",
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    try {
      let result = null;

      try {
        const proxyRes = await fetch("/api/contact", {
          method: "POST",
          headers,
          body: JSON.stringify(payload),
        });
        if (proxyRes.status !== 404) {
          const parsed = await parseResponse(proxyRes);
          if (!parsed.unusable) result = parsed;
        }
      } catch {
        result = null;
      }

      if (!result) {
        const directRes = await fetch(
          `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
          { method: "POST", headers, body: JSON.stringify(payload) }
        );
        result = await parseResponse(directRes);
      }

      if (!result.ok) {
        throw new Error(result.message || "Could not send the message.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setErrorMsg(
        String(err.message).includes("Activation")
          ? "Your message could not be delivered yet - this form is pending a one-time activation. Please try again shortly."
          : err.message || "Something went wrong while sending."
      );
      setStatus("error");
    }
  };

  const close = () => {
    setIsOpen(false);
    setStatus("idle");
    setErrorMsg("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-xl glass-strong glow-border rounded-3xl overflow-hidden max-h-[92vh] overflow-y-auto border border-white/20"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-white via-gray-400 to-white" />

            <div className="p-6 sm:p-10">
              <motion.button
                onClick={close}
                aria-label="Close contact form"
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {status === "success" ? (
                <motion.div 
                  className="text-center space-y-5 py-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center shadow-lg shadow-white/20">
                    <CheckCircle2 className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400 max-w-sm mx-auto">
                    Thank you! Your message has reached Aryan&apos;s inbox. Expect
                    a reply within 24 hours.
                  </p>
                  <Button onClick={() => setStatus("idle")}>Send Another</Button>
                </motion.div>
              ) : (
                <>
                  <motion.div 
                    className="flex items-start gap-4 mb-8 pr-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-white to-gray-400 flex items-center justify-center shadow-lg shadow-white/20">
                      <Send className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        Let&apos;s <span className="gradient-text">Talk</span>
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Fill this in — it lands straight in my Gmail inbox.
                      </p>
                    </div>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <motion.div 
                      className="grid sm:grid-cols-2 gap-5"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div>
                        <label htmlFor="cf-name" className={labelClasses}>
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="cf-name"
                            type="text"
                            name="name"
                            required
                            maxLength={80}
                            autoFocus
                            placeholder="e.g. Rahul Sharma"
                            value={form.name}
                            onChange={handleChange}
                            className={fieldClasses}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cf-email" className={labelClasses}>
                          Your Email
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            id="cf-email"
                            type="email"
                            name="email"
                            required
                            maxLength={120}
                            placeholder="e.g. rahul@gmail.com"
                            value={form.email}
                            onChange={handleChange}
                            className={fieldClasses}
                          />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="cf-message" className={labelClasses}>
                        Your Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-gray-400 absolute left-4 top-4 pointer-events-none" />
                        <textarea
                          id="cf-message"
                          name="message"
                          required
                          rows={5}
                          minLength={10}
                          maxLength={2000}
                          placeholder="e.g. Hi Aryan, I loved your projects. I have a freelance opportunity for you..."
                          value={form.message}
                          onChange={handleChange}
                          className={`${fieldClasses} resize-none pt-3.5`}
                        />
                      </div>
                      <p className="text-right text-xs text-gray-500/70 mt-1">
                        {form.message.length}/2000
                      </p>
                    </motion.div>

                    {status === "error" && (
                      <motion.p 
                        className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errorMsg}
                      </motion.p>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={status === "sending"}
                        className="w-full cursor-pointer bg-white text-black hover:bg-gray-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" /> Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>

                    <motion.p 
                      className="flex items-center justify-center gap-2 text-xs text-gray-500/80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Lock className="w-3.5 h-3.5" />
                      No spam, ever. Your details go only to my inbox.
                    </motion.p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
