export interface LaunchProps {
    id: string;
    mission_name: string;
    rocket: {
        rocket_name: string;
        rocket_type: string;
    };
    launch_date_utc: string;
    links: LaunchLinks;
    details: string;
}

export interface LaunchLinks {
    flickr_images: string[];
    article_link: string;
    video_link: string
}

export interface LaunchesProps {
    items: {
        launchesPast: LaunchProps[];
    };
}

export interface LaunchComponentProps {
    launchData: LaunchProps;
    openModal: (launch: LaunchProps) => void;
}

export interface ModalProps {
    data: LaunchProps | null;
    closeModal: () => void;
}