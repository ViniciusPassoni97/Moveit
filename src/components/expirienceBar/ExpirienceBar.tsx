
export function ExpirienceBar() {
    return(
        <header className="expirience-bar">
            <span>0 px</span>
            <div>
                <div className='expirience-bar-progress'>
                    <span className='current-expirience' style={{left:'50%'}}>
                        300 xp
                    </span>
                </div>
            </div>
            <span>600 px</span>
        </header>
    )
}