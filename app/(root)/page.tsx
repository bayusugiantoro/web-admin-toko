"use client";

import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div className="p-4">
        <Modal
          title="Test Title"
          description="test description"
          isOpen
          onClose={() => {}}
        >
          Children
        </Modal>
      </div>
    </>
  );
}
