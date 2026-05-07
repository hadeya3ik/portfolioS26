export default function Contact() {
  return (
    <form className="mt-5 space-y-3">
      <label className="block">
        <span className="sr-only">Email</span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="h-10 w-full rounded-md border border-border bg-subtle px-3 text-sm text-[#050505] outline-none transition focus:border-border focus:bg-background focus:shadow-[var(--shadow-sm)]"
        />
      </label>

      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          className="w-full resize-none rounded-md border border-border bg-subtle px-3 py-3 text-sm text-[#050505] outline-none transition focus:border-border focus:bg-background focus:shadow-[var(--shadow-sm)]"
        />
      </label>

      <button
        type="submit"
        className="h-10 w-full rounded-md bg-[#30372f] text-sm font-medium text-white shadow-[var(--shadow-sm)] transition hover:bg-[#20251f] focus:outline-none focus:ring-2 focus:ring-[#30372f]/20"
      >
        Send
      </button>
    </form>
  );
}
