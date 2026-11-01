'use client';

import React, { useState, useEffect } from 'react';
import { Download, Sparkles, X, Share, PlusSquare, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [isIos, setIsIos] = useState(() => {
    if (typeof window !== 'undefined') {
      const ua = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(ua);
    }
    return false;
  });
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // 1. Detect if running in standalone mode (already installed)
    const checkIsInstalled = () => {
      const isStandalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true;
      if (isStandalone) {
        setIsInstalled(true);
      }
    };

    checkIsInstalled();

    // 2. Register Service Worker securely
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .catch((err) => console.log('SW registration note:', err));
    }

    // 3. Listen for native beforeinstallprompt (Chromium, Android, Edge)
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
      console.log('VARNAM PWA installed successfully.');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
        setIsInstallable(false);
      }
      setDeferredPrompt(null);
    } else if (isIos) {
      setShowIosGuide(true);
    } else {
      // Fallback for browsers that support PWA without beforeinstallprompt prompt
      alert(
        'To install VARNAM on your device, tap your browser menu (⋮ or Share) and select "Add to Home Screen" or "Install App".'
      );
    }
  };

  // Do not render anything if already installed, dismissed, or on non-installable desktop without prompt
  if (isInstalled || dismissed) {
    return null;
  }

  // Only show if either native prompt is available OR on iOS device
  if (!isInstallable && !isIos) {
    return null;
  }

  return (
    <>
      {/* Floating Bottom-Left Install Pill */}
      <aside aria-label="Install App" className="fixed bottom-6 left-6 z-40">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 p-1.5 pl-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0E5DA] shadow-xl hover:shadow-2xl transition-all"
        >
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleInstallClick}>
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#E05E00] flex items-center justify-center text-white shadow-xs">
              <Download className="w-4 h-4" />
            </div>
            <div className="text-left pr-1">
              <p className="text-xs font-bold text-[#1F2937] leading-none">
                Install VARNAM
              </p>
              <p className="text-[10px] text-[#6B7280] mt-0.5 font-medium">
                Fast & lightweight cloud studio app
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleInstallClick}
            className="px-3 py-1.5 rounded-xl bg-[#FFF8F0] hover:bg-[#FF6B00] text-[#FF6B00] hover:text-white border border-[#FF6B00]/30 hover:border-[#FF6B00] text-xs font-bold transition-all cursor-pointer shadow-2xs"
          >
            Install
          </button>

          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors"
            aria-label="Dismiss install prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </aside>

      {/* iOS Manual Installation Modal Guide */}
      <AnimatePresence>
        {showIosGuide && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-[#F0E5DA] space-y-4 text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mx-auto shadow-xs">
                <Download className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-[#1F2937]">
                  Install VARNAM on iOS
                </h3>
                <p className="text-xs text-[#6B7280] mt-1">
                  Follow these simple steps in Safari to add VARNAM to your home screen:
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF8F0] border border-[#F0E5DA] text-left space-y-2.5 text-xs text-[#1F2937]">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    1
                  </span>
                  <span>
                    Tap the <strong>Share</strong> button <Share className="w-3.5 h-3.5 inline text-[#FF6B00]" /> in Safari.
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    2
                  </span>
                  <span>
                    Scroll down and tap <strong>&quot;Add to Home Screen&quot;</strong> <PlusSquare className="w-3.5 h-3.5 inline text-[#FF6B00]" />.
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    3
                  </span>
                  <span>
                    Tap <strong>Add</strong> at top right to launch standalone.
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowIosGuide(false)}
                className="w-full py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Got It
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
