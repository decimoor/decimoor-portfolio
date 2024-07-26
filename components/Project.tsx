import Image from "next/image";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { basePath } = publicRuntimeConfig;

interface Interface {
    projectName: string;
    shortDescription: string;
    imageUrl: string;
    textColor: string;
}

const a = 2;

export default function Project({
    projectName,
    shortDescription,
    imageUrl,
    textColor,
}: Interface) {
    return (
        <div className="w-full h-full relative bg-accent rounded-md flex flex-col-reverse p-3 relative group hover:bg-accent/90 duration-300 transition-all overflow-hidden">
            <span className={`z-20 ${textColor} group-hover:opacity-0 duration-150 transition-all`}>
                {projectName}
            </span>
            <img src={`${basePath}${imageUrl}`} alt="" fill className="object-cover" />
            {/* describtion */}
            <div className="absolute bottom-[-100%] left-0 w-full h-1/3 group-hover:bottom-0 transition-all ease-in-out duration-500 bg-black/40 p-3">
                {shortDescription}
            </div>
        </div>
    );
}
