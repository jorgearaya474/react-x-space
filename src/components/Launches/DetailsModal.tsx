import React, { FC } from 'react';
import { ModalProps } from '../../../interfaces';

const DetailsModal: FC<ModalProps> = ({ data, closeModal }) => {
    return (
        <div id="defaultModal" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50">
            <div className='flex items-center justify-center'>
                <div className="relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-start justify-between p-4 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-black">
                                Details: {data?.mission_name}
                            </h3>
                            <button type="button" onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="defaultModal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <p className="text-base text-left leading-relaxed text-black">
                                <b>Rocket:</b> {data?.rocket.rocket_name}
                            </p>
                            <p className="text-base text-left leading-relaxed text-black">
                                <b>Type:</b> {data?.rocket.rocket_type}
                            </p>
                            <p className="text-base text-left leading-relaxed text-black">
                                <b>Details:</b> {data?.details || 'NA'}
                            </p>
                            <div className='flex items-center gap-4'>
                                <a href={data?.links.article_link} className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' target='_blank'>Read Article</a>
                                <a href={data?.links.video_link} className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' target='_blank'>Watch Video</a>
                            </div>
                        </div>
                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                            <button onClick={closeModal} type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsModal;
