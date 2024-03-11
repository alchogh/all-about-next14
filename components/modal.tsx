"use client";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler, useCallback, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();
  console.log(overlay);
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current)
        if (onDismiss) onDismiss();
      console.log("asdf");
    },
    [onDismiss, overlay, wrapper]
  );

  return (
    <div onClick={onClick} ref={overlay}>
      {children}
    </div>
  );
}
