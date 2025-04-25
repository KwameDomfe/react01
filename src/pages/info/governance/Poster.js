import React from 'react'
import mtnlogo from '../../../images/mtnlogo.png'

const Poster = () => {
    return (
        <div
        >
            <div className=" 
            flex pt6-00 pa2-00">
            <img src={mtnlogo}
                alt = "tree"
                className="w4-00 mr1-00"
            />
                <div>
                <h2>MTN NON-EXPIRY </h2>
                <h3>DATA BUNDLES</h3>
                </div>
            </div>
            <div className="pa2-00 flex ggap1-00 bg-black-20 h-100">
                <div className="w-50 ba bw2 pa1-00"
                >
                    <div className="mb2-00">
                        <div className="flex justify-between mb0-50">
                            <span className="b">
                                1Gb 
                            </span>
                            <span className="b">
                                GHC 6.50 
                            </span>
                        </div>
                        <div className="flex justify-between mb0-50">
                            <span className="b">
                                2Gb 
                            </span>
                            <span className="b">
                                GHC 12.00 
                            </span>
                        </div>
                        <div className="flex justify-between mb0-50">
                            <span className="b">
                                3Gb 
                            </span>
                            <span className="b">
                                GHC 18.00 
                            </span>
                        </div>
                        <div className="flex justify-between 
                            mb0-50"
                        >
                            <span className="b">
                                4Gb 
                            </span>
                            <span className="b">
                                GHC 23.00 
                            </span>
                        </div>
                        <div className="flex justify-between mb0-50">
                            <span className="b">
                                5Gb 
                            </span>
                            <span className="b">
                                GHC 28.00 
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between mb0-50"
                    >
                        <span className="b">
                            10Gb 
                        </span>
                        <span className="b">
                            GHC 49.00 
                        </span>
                    </div>
                    <div className="flex justify-between mb0-50"
                    >
                        <span className="b">
                            15Gb 
                        </span>
                        <span className="b">
                            GHC 66.00 
                        </span>
                    </div>
                    <div className="flex justify-between mb0-50"
                    >
                        <span className="b">
                            20Gb 
                        </span>
                        <span className="b">
                            GHC 85.00 
                        </span>
                    </div>
                    <div className="flex justify-between mb0-50"
                    >
                        <span className="b">
                            25Gb 
                        </span>
                        <span className="b">
                            GHC 100.00 
                        </span>
                    </div>
                    <div className="flex justify-between mb0-50"
                    >
                        <span className="b">
                            50Gb 
                        </span>
                        <span className="b">
                            GHC 178.00 
                        </span>
                    </div>
                    <div className="flex justify-between mb0-50"
                    >
                        <span className="b">
                            75Gb 
                        </span>
                        <span className="b">
                            GHC 260.00 
                        </span>
                    </div>
                    <div className="flex justify-between mb0-50"
                    >
                        <span className="b">
                            100Gb 
                        </span>
                        <span className="b">
                            GHC 340.00 
                        </span>
                    </div>
                </div>
                <div className="flex flex-column w-50 ba bw2 pa1-00">
                    <h2>
                        How to:
                    </h2>
                    <ul>
                        <li className="mb1-00">
                            1. MOMO the amount related to your data requirements to this number<br/><span className="b f2-00">0249282488</span>
                        </li>
                        <li className="mb1-00">
                            2. Use the MTN number you are buying the data for as your MOMO reference. 
                        </li>
                        <li className="mb1-00">
                            3. Your DATA would activated for you between 30 mins and 2hrs.
                        </li>
                    </ul>
                    <h3 className='gold bg-black tc pa1-00 mb0-00 br0-25'>New Pricing takes effect  from 1st June , 2024.</h3>
                </div>
            </div>
        </div>
    )
}

export default Poster
