const SidePanel = ({children})=>{
    return (
        <div className="h-screen w-[250px] bg-gray-bg-800 p-3">
            {children}
        </div>
    );
}

export default SidePanel;
