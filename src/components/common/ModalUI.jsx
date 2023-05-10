import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GrClose } from "react-icons/gr";

export default function ModalUI({ closeModal, isOpen }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex  min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl transform overflow-hidden rounded-xl bg-white dark:bg-black p-8 lg:p-10  xl:p-16  2xl:p-16 text-left align-middle shadow-xl transition-all border-8">
                  <button onClick={closeModal}>
                    <GrClose className="absolute right-5 top-5 w-4 h-5 dark:bg-gray-400" />
                  </button>

                  <div className="">
                    <div>
                      <Dialog.Title
                        as="h3"
                        className="text-xl text-center font-medium text-red-600 dark:text-gray-200 border-2 rounded-md border-red-600 py-3"
                      >
                        Unable to find survey
                      </Dialog.Title>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
