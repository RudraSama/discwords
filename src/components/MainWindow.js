const MainWindow = ({children})=>{
    return (
        <div className="bg-gray-bg-700 h-[calc(100vh-56px)] flex">
            {children}
        </div>
    );
}


export default MainWindow;
