import { GiFlexibleStar } from "react-icons/gi";
export default function ContactCards(){
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}));
    }
    return(
        <div className="contact-cards">
            <h2> <GiFlexibleStar /> Let's Work Together</h2>
            <p style={{color: 'green'}}>Available for Freelance Work</p>
            <p style={{color: '#64748b'}}>Whether you need web administration expertise, technical consulting, or leadership training, I'm here to help bring your vision to life.
            </p>

            <form>
                <label>Your Email</label>
                <input
                 type="email"
                 id="email"
                 placeholder="your.email@example.com"
                 value={}
                 name=""
                 onChange={handleChange}
                 required
                />
            </form>
        </div>
    );
}