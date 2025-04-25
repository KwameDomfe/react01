export default function Contact() {
  
    return (
    <div id="contact"
        className=""
    >
        <h3>Contact Us</h3>

        <form>
            <div className="mb2-00">
                <label className="">
                    <span>
                        Your email:
                    </span>
                    <input 
                        type="email"
                        name = "email"
                        className="pv0-25 ph0-50 ml1-00"
                        placeholder="example@mail.com"
                        required
                    />
                </label>
            </div>
            <div className="mb2-00">
                <label>
                    <span>
                        Your message:
                    </span>
                    <textarea 
                    
                        name = "message"
                        className="pv0-25 ph0-50 ml1-00"
                        placeholder="Type your message here"
                        required
                    ></textarea>
                </label>
            </div>
            <button>Submit</button>
        </form>
      
    </div>
  )
}
