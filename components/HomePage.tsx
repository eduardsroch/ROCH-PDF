
import React from 'react';
import type { Tool } from '../types';
import ToolCard from './ToolCard';
import { MergeIcon } from './icons/MergeIcon';
import { SplitIcon } from './icons/SplitIcon';
import { CompressIcon } from './icons/CompressIcon';
import { PdfWordIcon } from './icons/PdfWordIcon';
import { WordPdfIcon } from './icons/WordPdfIcon';
import { OcrIcon } from './icons/OcrIcon';
import { RotateIcon } from './icons/RotateIcon';
import { ProtectIcon } from './icons/ProtectIcon';
import { SignIcon } from './icons/SignIcon';

const tools: Tool[] = [
  { id: 'merge', title: 'Merge PDF', description: 'Combine multiple PDFs into one single document.', icon: <MergeIcon />, color: 'text-red-500', bgColor: 'bg-red-50' },
  { id: 'split', title: 'Split PDF', description: 'Extract pages from a PDF or save each page as a separate PDF.', icon: <SplitIcon />, color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { id: 'compress', title: 'Compress PDF', description: 'Reduce the file size of your PDF while optimizing for quality.', icon: <CompressIcon />, color: 'text-green-500', bgColor: 'bg-green-50' },
  { id: 'pdf-to-word', title: 'PDF to Word', description: 'Convert your PDFs to editable DOCX documents.', icon: <PdfWordIcon />, color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
  { id: 'word-to-pdf', title: 'Word to PDF', description: 'Convert your DOCX documents to professional PDFs.', icon: <WordPdfIcon />, color: 'text-sky-500', bgColor: 'bg-sky-50' },
  { id: 'ocr', title: 'OCR PDF', description: 'Make scanned PDFs searchable and selectable.', icon: <OcrIcon />, color: 'text-purple-500', bgColor: 'bg-purple-50' },
  { id: 'rotate', title: 'Rotate PDF', description: 'Rotate one or all pages in your PDF file as you wish.', icon: <RotateIcon />, color: 'text-yellow-500', bgColor: 'bg-yellow-50' },
  { id: 'protect', title: 'Protect PDF', description: 'Add a password to your PDF files to prevent unauthorized access.', icon: <ProtectIcon />, color: 'text-slate-500', bgColor: 'bg-slate-50' },
  { id: 'sign', title: 'Sign PDF', description: 'Sign your documents electronically with ease and security.', icon: <SignIcon />, color: 'text-cyan-500', bgColor: 'bg-cyan-50' },
];

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight">
          ROCH <span className="text-primary">PDF</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-neutral-text">
          suas ferramentas PDF, mais rápidas.
        </p>
        <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 text-lg font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300">
                Comece grátis
            </button>
        </div>
      </div>
      
      <div className="mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-secondary">All the tools you need</h2>
        <p className="text-center mt-2 text-neutral-text">Make your life easier with our PDF toolkit.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
