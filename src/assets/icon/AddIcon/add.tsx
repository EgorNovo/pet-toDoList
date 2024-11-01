import {FC} from 'react'

type TrashIconProps = {
    width?: string;
    height?: string;
}

const AddIcon: FC<TrashIconProps> = ({width = '24px', height = '24px'}:TrashIconProps) => {
    return (
    <svg 
        width={width} 
        height={height}
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5"/>
        <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
    )
}

export default AddIcon;