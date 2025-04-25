
export default function DetailPagesLayout(props) {
    
    const {depname} = props
    return (

        <div id=""
            className="grid gtc12 
                container container90 
                min-vh-90 
                pt4-00"
        >
            <header className="gc1s12">
                <h2>Landing Page</h2>
            </header>
            <aside className="gc1s3 bg-black-10">
            </aside>

            <main className="gc4s9 grid gtc4"
            >
                <div className="gc1s3 bg-black-20">
                    <h2>{depname} Details Page</h2>
                </div>

                <div className="gc4s1 bg-black-40"
                >
                    <nav class="pa1-00">
                        <h3 className="bb bw2">On This Page</h3>
                        <ul class="flex flex-column items-center justify-center 
                            h-100 white-90"
                        >
                            <li class="w-100
                                mb2-00 mb0-00-m "
                            >
                                <a class="flex items-center pb0-50 white-80 f0-75" 
                                    href="/"
                                >
                                    {/* <img src="" 
                                        class="w1-25 h1-25 br0-25 ba bw1 gold cover" 
                                        alt="Projects"
                                    /> */}
                                    <div class="ml0-50"
                                    >
                                        <span class="gold f1-00">Section I</span>
                                    </div>
                                </a>
                            </li>
                            <li class="mb2-00 mb0-00-m w-100">
                                <a class="f0-75 flex items-center white-80 pb0-50" 
                                    href="/"
                                >
                                    {/* <img src="/static/media/portrait-01.993ab23c3d244c4bfe34.jpg" 
                                        class="w1-25 h1-25 br0-25 ba bw1 gold cover" 
                                        alt="Services" 
                                    /> */}
                                    <div class="ml0-50">
                                        <span class="gold f1-00">
                                            Section II
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li class="mb2-00 mb0-00-m w-100">
                                <a class="f0-75 flex items-center white-80 pb0-50" 
                                    href="/"
                                >
                                    {/* <img src="" 
                                        class="w1-25 h1-25 br0-25 ba bw1 gold cover" 
                                        alt="info"
                                    /> */}
                                    <div class="ml0-50">
                                        <span class="gold f1-00">Section III</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </main>
            
        </div>

    )
}
