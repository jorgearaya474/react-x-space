import React, { FC } from 'react';
import Card from '../UI/Card';
import { LaunchComponentProps } from '../../../interfaces';
import { parseDate } from '../../utils/utils';

const Launch: FC<LaunchComponentProps> = ({ launchData, openModal }) => {

  return (
    <Card className='flex flex-wrap lg:flex-nowrap'>
      <img
        className="object-cover w-full h-full max-h-52 rounded-t-lg lg:w-48 md:rounded-none md:rounded-l-lg"
        src={launchData.links.flickr_images[0]}
        alt={launchData.mission_name}
        loading="lazy"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <span className='text-left'>{parseDate(launchData.launch_date_utc)}</span>
        <h5 className="text-left mb-2 text-2xl font-bold tracking-tight text-black">
          Mission: {launchData.mission_name}
        </h5>
        <button className='block w-32 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => openModal(launchData)}>View Details</button>
      </div>
    </Card>
  );
};

export default Launch;
