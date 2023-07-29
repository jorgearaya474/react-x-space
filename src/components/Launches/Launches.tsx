import React, { FC, useState } from 'react';
import Launch from './Launch';
import DetailsModal from './DetailsModal';
import { LaunchProps, LaunchesProps } from '../../../interfaces';

const Launches: FC<LaunchesProps> = (props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedLaunch, setSelectedLaunch] = useState<LaunchProps | null>(null);

    const openModal = (launch: LaunchProps) => {
        setSelectedLaunch(launch);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const launchesWithImages =
        props.items?.launchesPast.filter((launch) => launch.links.flickr_images.length > 0) || [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
            {launchesWithImages.map((launch) => (
                <Launch key={launch.id} launchData={launch} openModal={openModal} />
            ))}
            {showModal && <DetailsModal data={selectedLaunch} closeModal={closeModal} />}
        </div>
    );
};

export default Launches;