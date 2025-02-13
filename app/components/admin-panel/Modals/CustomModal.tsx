import { Button } from "@heroui/button";
import { ModalBody, ModalContent, ModalFooter, ModalHeader, Modal } from "@heroui/modal";
import type React from "react";

type CustomModalType = {
  isOpen: boolean;
  onClose: () => void;
  title?: string | React.ReactNode;
  desc?:React.ReactNode;
  action?: () => void;
};

function CustomModal({ isOpen, onClose, title, desc, action }: CustomModalType) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="font-DanaMedium" shouldBlockScroll={false} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <p>{desc}</p>
              </ModalBody>
              <ModalFooter>
                {action ? (
                  <>
                    <Button color="danger" variant="light" onPress={onClose}>
                      لغو
                    </Button>
                    <Button color="secondary" onPress={action}>
                      بله
                    </Button>
                  </>
                ) : (
                  <Button color="secondary" onPress={onClose}>
                    بستن
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
