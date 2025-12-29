'use client';
import { useState, useRef } from 'react';

export default function PngToJpgTool() {
  const [file, setFile] = useState<File | null>(null);
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === 'image/png') {
        setFile(selectedFile);
        setDownloadUrl('');
        convertImage(selectedFile);
      } else {
        setProgress('Please select a PNG file');
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === 'image/png') {
        setFile(droppedFile);
        setDownloadUrl('');
        convertImage(droppedFile);
      } else {
        setProgress('Please drop a PNG file');
      }
    }
  };

  const convertImage = async (imageFile: File) => {
    setConverting(true);
    setProgress('Converting PNG to JPG...');
    
    try {
      const img = new Image();
      const reader = new FileReader();
      
      reader.onload = (e) => {
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            setProgress('Error: Could not get canvas context');
            setConverting(false);
            return;
          }
          
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
          
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              setDownloadUrl(url);
              setProgress('Conversion complete! Click download to save.');
              setConverting(false);
            }
          }, 'image/jpeg', 0.92);
        };
        
        img.src = e.target?.result as string;
      };
      
      reader.readAsDataURL(imageFile);
    } catch (error) {
      setProgress('Error during conversion');
      setConverting(false);
    }
  };

  const downloadImage = () => {
    if (downloadUrl && file) {
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = file.name.replace('.png', '.jpg');
      a.click();
    }
  };

  return (
    <section className="glass-panel p-6 sm:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>Browser based
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">PNG to JPG Converter</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">Convert PNG images to JPG format instantly. Fast, secure, and completely private—all processing happens in your browser.</p>
        </div>
        <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} className="group flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-600 bg-slate-900/40 px-6 py-12 text-center transition hover:border-cyan-400/60 hover:bg-slate-900/60" onClick={() => fileInputRef.current?.click()}>
          <svg className="h-12 w-12 text-slate-400 transition group-hover:text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/></svg>
          <div>
            <p className="text-lg font-semibold text-white">Drop PNG file here or click to browse</p>
            <p className="mt-1 text-sm text-slate-400">PNG files only</p>
          </div>
          <input ref={fileInputRef} type="file" accept="image/png" onChange={handleFileChange} className="hidden"/>
        </div>
        {progress && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
            <p className="text-center text-sm text-slate-300">{progress}</p>
          </div>
        )}
        {downloadUrl && (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <svg className="h-12 w-12 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <p className="text-lg font-semibold text-white">Conversion Complete!</p>
            <button onClick={downloadImage} className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-3 font-semibold uppercase tracking-wide text-white transition hover:opacity-90">Download JPG</button>
          </div>
        )}
      </div>
    </section>
  );
}
