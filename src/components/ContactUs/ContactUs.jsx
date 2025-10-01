import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Phone: must be digits, 9–15 length
    if (!/^\d{9,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 9–15 digits";
    }

    // Email: simple regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    });
    setErrors({});
  };

  return (
    <section classNamen="contact-us d-flex" id="contact">
      <h2 className="left-margin right-margin white">Contact Us</h2>
      <p className="left-margin right-margin white app-color-text-2">
        Feel free to get in touch with us! Whether you'd like to sign up for
        daily devotional reminders, share a prayer request, or connect with our
        church leadership, we're here for you. Simply fill out the form below to
        stay connected and let us support you in your spiritual journey.
      </p>

      <div className="signup-form d-flex">
        <form className="d-flex" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Mailing Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
