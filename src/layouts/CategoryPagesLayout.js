import { Outlet } from "react-router-dom"

export default function CategoryPagesLayout(props) {


    const {capname, bgColour} = props

    return (
        <div id = { `${capname}` }
            className={"min-vh-90 pt4-00  bg-black-50"}
        >
            <header className={`flex flex-column items-center justify-center
                container container90 vh-75
                pa1-00 
                gold bg-${bgColour}`}
            >
                <hgroup className="w-50 tc">
                    <h2> { capname } Page Header</h2>
                    <p>
                        Provisions must be made for <b>links</b> to every relevant information relating to <b>{capname}</b>. 
                    </p>
                    <div>
                        <div>
                            Lists
                        </div>
                        <div>
                            Details
                        </div>
                    </div>
                </hgroup>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="flex items-center justify-center vh-10 bg-black white">
                Page Footer
            </footer>
        </div>
    )
}
