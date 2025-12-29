import type { Metadata } from 'next';
import PngToJpgTool from './components/PngToJpgTool';

export const metadata: Metadata = {
  title: 'PNG to JPG Converter — Convert PNG Images to JPG Format',
  description: 'Convert PNG images to JPG format instantly. Fast, secure, browser-based conversion with no quality loss.',
  keywords: 'PNG to JPG, convert PNG, image converter, PNG converter, JPG converter',
};

const featurePillars = [
  { title: 'Instant conversion', description: 'Convert PNG to JPG in seconds with a single click. No waiting, no uploads.' },
  { title: 'Privacy-first', description: 'All conversion happens in your browser. Your images never leave your device.' },
  { title: 'High quality', description: 'Maintains excellent image quality while reducing file size significantly.' },
];

const seoContent = [
  {
    title: 'Why convert PNG to JPG',
    body: [
      'PNG and JPG serve different purposes in digital imaging. PNG excels at graphics with transparency and lossless compression, while JPG is optimized for photographs and smaller file sizes. Converting PNG to JPG reduces file size by 50-80% for photographic content, making images faster to load and easier to share.',
      'Website performance improves dramatically when using JPG instead of PNG for photos. A 5MB PNG photo becomes a 500KB JPG with minimal visible quality loss. This reduction speeds up page loads, reduces bandwidth costs, and improves SEO rankings since Google considers page speed a ranking factor.',
      'Email attachments have size limits that large PNG files quickly exceed. Converting PNG to JPG before attaching images ensures delivery and faster downloads for recipients. Many email services reject attachments over 25MB, making conversion essential for sharing high-resolution images.',
      'Social media platforms automatically convert uploaded images, often with poor results. Pre-converting PNG to JPG gives you control over quality settings and ensures better results than platform defaults. This control is especially important for photographers and content creators.',
      'Storage space becomes expensive when storing thousands of PNG files. Converting photos to JPG before archiving reduces storage consumption by 70-90%. Cloud storage services charge based on usage, making JPG conversion a cost-effective choice for large photo libraries.',
    ],
  },
  {
    title: 'Understanding PNG and JPG differences',
    body: [
      'PNG (Portable Network Graphics) uses lossless compression, meaning no image data is lost during compression. This makes PNG ideal for graphics, logos, screenshots, and images requiring transparency. However, lossless compression produces larger file sizes for photographic content.',
      'JPG (Joint Photographic Experts Group) uses lossy compression, discarding some image data to achieve smaller file sizes. The human eye cannot detect most of this data loss, especially at quality settings above 80%. JPG excels at compressing photographs with many colors and gradual transitions.',
      'Transparency support is PNG\'s key advantage. PNG supports alpha channel transparency, allowing images to blend seamlessly with any background. JPG does not support transparency—transparent areas become white or another solid color during conversion.',
      'File size differences are dramatic for photographic content. A 10-megapixel photo might be 15MB as PNG but only 2MB as JPG at 90% quality. This 7.5x reduction makes JPG the obvious choice for photos where transparency is not needed.',
      'Quality degradation occurs with repeated JPG editing and saving. Each save cycle introduces more compression artifacts. PNG maintains perfect quality through multiple edit cycles. For final output, JPG is fine. For working files, PNG is better.',
    ],
  },
  {
    title: 'Common PNG to JPG conversion scenarios',
    body: [
      'Photography workflows often start with PNG screenshots or exports from editing software. Photographers convert these PNG files to JPG for final delivery to clients or publication online. JPG\'s smaller size makes sharing galleries practical.',
      'Website optimization requires converting PNG photos to JPG. Web developers use [PNG to JPG] conversion to reduce page weight and improve loading times. Modern websites serve JPG for photos and PNG only for graphics requiring transparency.',
      'Social media content creation involves preparing images for various platforms. Instagram, Facebook, and Twitter all work better with JPG for photographic content. Converting PNG to JPG before uploading ensures optimal file sizes and quality.',
      'Document preparation for printing or digital distribution benefits from JPG conversion. PDF documents with embedded PNG photos become unnecessarily large. Converting photos to JPG before embedding reduces PDF file size dramatically.',
      'Mobile app development requires optimized image assets. App developers convert PNG photos to JPG to reduce app download size and improve performance. Smaller image files mean faster app launches and lower data usage.',
    ],
  },
  {
    title: 'Technical aspects of browser-based conversion',
    body: [
      'Modern browsers provide powerful image processing through the Canvas API. JavaScript can load PNG images, manipulate pixel data, and export as JPG without server infrastructure. This client-side processing ensures privacy and eliminates upload/download times.',
      'The conversion process loads the PNG into memory, draws it onto a canvas element, and exports with JPG compression. The Canvas toBlob method handles compression using the browser\'s built-in encoders. These encoders produce results comparable to desktop software.',
      'Quality settings range from 0 to 1, where 1 represents maximum quality. A setting of 0.92 (92%) provides excellent results for most images, balancing quality and file size. Lower settings produce smaller files but introduce visible compression artifacts.',
      'Transparency handling requires special consideration. Since JPG does not support transparency, transparent areas must be replaced with a solid color. This tool uses white as the background color, which works well for most use cases.',
      'Performance depends on image size and device capabilities. Small images (under 2MB) convert nearly instantly. Large images (10-20MB) may take several seconds, especially on older devices. Modern JavaScript engines make the process surprisingly fast.',
    ],
  },
];

const faqs = [
  { question: 'Does this tool upload my images?', answer: 'No. The entire conversion happens in your browser using JavaScript. Your images never touch a server.' },
  { question: 'Will I lose quality converting PNG to JPG?', answer: 'Minimal quality loss occurs at 92% quality setting. For photographs, the difference is rarely noticeable. Graphics with sharp edges may show slight artifacts.' },
  { question: 'What happens to transparent areas?', answer: 'JPG does not support transparency. Transparent areas become white during conversion. If you need transparency, keep the PNG format.' },
  { question: 'Can I convert multiple images at once?', answer: 'Currently, the tool processes one image at a time to ensure optimal performance and user experience.' },
];

export default function Home() {
  return (
    <div className="bg-grid-slate min-h-screen">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex flex-col gap-1">
            <a className="text-2xl font-semibold tracking-tight text-white" href="/">PNG to JPG</a>
            <p className="text-sm text-slate-400">Convert PNG images to JPG format</p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a className="transition hover:text-white" href="/">Home</a>
            <a className="transition hover:text-white" href="mailto:support@lightning.studio">Support</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <PngToJpgTool />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featurePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-12">
          <h2 className="text-3xl font-semibold text-white">In-depth guide</h2>
          {seoContent.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xl font-semibold text-white">{section.title}</h3>
              <div className="space-y-4">
                {section.body.map((paragraph, idx) => {
                  const linkMatch = paragraph.match(/\[PNG to JPG\]/);
                  if (linkMatch) {
                    const parts = paragraph.split('[PNG to JPG]');
                    return (
                      <p key={idx} className="leading-relaxed text-slate-300">
                        {parts[0]}
                        <a href="https://toolsvana.com/tool/png-to-jpg" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300">PNG to JPG</a>
                        {parts[1]}
                      </p>
                    );
                  }
                  return <p key={idx} className="leading-relaxed text-slate-300">{paragraph}</p>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="mt-16 border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        <p>All processing happens locally in your browser. Powered by Lightning Studio.</p>
      </footer>
    </div>
  );
}
