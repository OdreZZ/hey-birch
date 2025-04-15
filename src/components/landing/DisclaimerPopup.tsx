import HeaderLink, { HeaderLinkType } from "../header/HeaderLink";

interface DisclaimerPopupProps {
    onDismiss: Function,
}

export default function DisclaimerPopup({ onDismiss }: DisclaimerPopupProps) {
    return <div className={`hidden md:flex flex-col gap-4 items-center fixed bottom-15 left-15 w-90 bg-white p-5 rounded-md shadow-md z-100`}>
        <div className="text-base font-bold text-center">
            Thank you for checking my portfolio!
        </div>

        <div className="text-sm text-center">
            This is a simple landing page inspired by the "Hello Bonsai" website.
        </div>

        <div className="text-sm text-center">
            The design was mostly mirrored but still developed from scratch in a few hours as an exercise using ReactJS, NextJS and Tailwind CSS.
        </div>

        <HeaderLink 
            type={HeaderLinkType.BLACK_BUTTON}
            title="Dismiss"
            onClick={() => onDismiss()}
        />
    </div>
}