"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Linkedin, Mail, MapPin, MessageCircle, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/effects/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/language-context";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function Contact() {
  const { t } = useLanguage();

  const schema = z.object({
    name: z.string().min(2, t.contact.errors.name),
    email: z.string().email(t.contact.errors.email),
    message: z.string().min(10, t.contact.errors.message),
  });
  type FormValues = z.infer<typeof schema>;

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    setErrorMsg("");

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setErrorMsg(t.contact.errors.notConfigured);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: data.name,
          reply_to: data.email,
          subject: `New message from ${data.name} — Portfolio`,
          name: data.name,
          email: data.email,
          message: data.message,
          botcheck: "",
        }),
      });

      const json = await res.json();

      if (json.success) {
        setStatus("sent");
        reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setErrorMsg(json.message || t.contact.errors.generic);
      }
    } catch {
      setStatus("error");
      setErrorMsg(t.contact.errors.network);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="container-x py-24 md:py-32">
      <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: info */}
        <Reveal>
          <div className="glass noise flex h-full flex-col gap-6 rounded-3xl p-8">
            <div className="flex items-center gap-2 text-sm text-ink-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {t.contact.available}
            </div>

            <div className="space-y-5">
              <button onClick={copyEmail} className="focus-ring group flex w-full items-center justify-between gap-3 rounded-2xl border border-border/60 bg-canvas/50 p-4 text-start transition-colors hover:border-accent/40">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-muted/70 text-accent">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.12em] text-ink-soft">
                      {t.contact.emailLabel}
                    </div>
                    <div className="font-mono text-sm">{site.email}</div>
                  </div>
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span key="copied" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className="flex items-center gap-1 text-xs text-accent">
                      <Check className="h-3.5 w-3.5" /> {t.contact.copied}
                    </motion.span>
                  ) : (
                    <motion.span key="copy" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className="text-ink-soft group-hover:text-ink">
                      <Copy className="h-4 w-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="focus-ring group flex w-full items-center gap-3 rounded-2xl border border-border/60 bg-canvas/50 p-4 transition-colors hover:border-accent/40">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-muted/70 text-accent">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.12em] text-ink-soft">
                    {t.contact.whatsappLabel}
                  </div>
                  <div className="text-sm">{t.contact.whatsappSub}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-canvas/50 p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-muted/70 text-accent">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.12em] text-ink-soft">
                    {t.contact.basedIn}
                  </div>
                  <div className="text-sm">{t.hero.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <div className="text-xs uppercase tracking-[0.12em] text-ink-soft">
                {t.contact.elsewhere}
              </div>
              <div className="flex gap-2">
                <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border bg-canvas/60 text-ink-soft transition-colors hover:text-ink">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border bg-canvas/60 text-ink-soft transition-colors hover:text-ink">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} className="glass noise flex flex-col gap-5 rounded-3xl p-8">
            {/* Honeypot for spam bots */}
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

            <Field
              label={t.contact.nameLabel}
              error={errors.name?.message}
              input={
                <input {...register("name")} placeholder={t.contact.namePlaceholder} className="w-full bg-transparent text-ink placeholder:text-ink-soft/70 focus:outline-none" />
              }
            />
            <Field
              label={t.contact.emailFieldLabel}
              error={errors.email?.message}
              input={
                <input {...register("email")} type="email" placeholder={t.contact.emailPlaceholder} className="w-full bg-transparent text-ink placeholder:text-ink-soft/70 focus:outline-none" />
              }
            />
            <Field
              label={t.contact.messageLabel}
              error={errors.message?.message}
              input={
                <textarea {...register("message")} rows={5} placeholder={t.contact.messagePlaceholder} className="w-full resize-none bg-transparent text-ink placeholder:text-ink-soft/70 focus:outline-none" />
              }
            />

            <AnimatePresence>
              {status === "error" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-start gap-2 rounded-xl border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-300">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-2 flex items-center justify-end">
              <Button type="submit" disabled={status === "sending" || status === "sent"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> {t.contact.sending}
                  </>
                ) : status === "sent" ? (
                  <>
                    <Sparkles className="h-4 w-4" /> {t.contact.sent}
                  </>
                ) : (
                  <>{t.contact.send}</>
                )}
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, input, error }: { label: string; input: React.ReactNode; error?: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-[0.12em] text-ink-soft">{label}</span>
      <div className="group rounded-2xl border border-border/60 bg-canvas/50 p-4 transition-all focus-within:border-accent focus-within:shadow-[0_0_0_4px_hsl(var(--accent)/0.15)]">
        {input}
      </div>
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}