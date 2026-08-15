<h1>🌍 Wanderlust</h1>

<p>
  A full-stack travel listing web application where users can explore
  travel destinations, create their own listings, upload images,
  and securely sign up and log in.
</p>

<h2>✨ Features</h2>

<ul>
  <li>🔐 User Registration and Login</li>
  <li>🏡 Create, Read, Update and Delete Listings</li>
  <li>🖼️ Upload Listing Images</li>
  <li>☁️ Cloudinary Image Storage</li>
  <li>⭐ Review and Rating System</li>
  <li>🔒 Authentication and Authorization</li>
  <li>💬 Flash Messages</li>
  <li>📱 Responsive User Interface</li>
</ul>

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript</li>
  <li>EJS</li>
  <li>Bootstrap</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>RESTful APIs</li>
</ul>

<h3>Database</h3>
<ul>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>MongoDB Atlas</li>
</ul>

<h3>Authentication</h3>
<ul>
  <li>Passport.js</li>
  <li>Passport Local</li>
  <li>Passport Local Mongoose</li>
  <li>Express Session</li>
</ul>

<h3>Other Technologies</h3>
<ul>
  <li>Cloudinary</li>
  <li>Connect Flash</li>
  <li>Dotenv</li>
  <li>Method Override</li>
  <li>Joi</li>
</ul>

<h2>📂 Project Structure</h2>

<pre>
Wanderlust/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listings.js
│   ├── reviews.js
│   └── user.js
│
├── public/
│   ├── css/
│   └── js/
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── users/
│
├── .env
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
└── README.md
</pre>

<h2>🚀 Getting Started</h2>

<h3>1. Clone the Repository</h3>

<pre>
git clone https://github.com/YOUR_USERNAME/wanderlust.git
cd wanderlust
</pre>

<h3>2. Install Dependencies</h3>

<pre>
npm install
</pre>

<h3>3. Configure Environment Variables</h3>

<p>
  Create a <code>.env</code> file in the root directory.
</p>

<pre>
ATLASDB_URL=your_mongodb_atlas_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
</pre>

<p>
  <strong>⚠️ Never upload your .env file to GitHub.</strong>
</p>

<h3>4. Run the Application</h3>

<pre>
node app.js
</pre>

<p>For development using Nodemon:</p>

<pre>
nodemon app.js
</pre>

<p>
  The application will run at:
  <strong>http://localhost:8080</strong>
</p>

<h2>🗄️ Database Initialization</h2>

<p>
  The project contains sample listing data inside
  <code>init/data.js</code>.
</p>

<pre>
cd init
node index.js
</pre>

<h2>🔐 Authentication Flow</h2>

<p>
  Wanderlust uses Passport.js and Passport Local Mongoose
  for authentication.
</p>

<ol>
  <li>User creates an account.</li>
  <li>Password is securely handled by Passport Local Mongoose.</li>
  <li>User is automatically logged in after successful registration.</li>
  <li>Authenticated users can access protected features.</li>
  <li>Users can log out securely.</li>
</ol>

<h2>🏡 Listing Flow</h2>

<pre>
Login
  ↓
Create Listing
  ↓
Add Title
  ↓
Add Description
  ↓
Upload Image
  ↓
Add Price
  ↓
Add Location &amp; Country
  ↓
Publish Listing
</pre>

<h2>⭐ Review System</h2>

<p>
  Users can add reviews and ratings to listings.
  Users can also delete their own reviews.
</p>

<h2>🔒 Security</h2>

<ul>
  <li>Session-based authentication</li>
  <li>Password hashing</li>
  <li>Protected routes</li>
  <li>Authorization middleware</li>
  <li>Environment variables for sensitive credentials</li>
  <li>Server-side validation</li>
  <li>Custom error handling</li>
</ul>

<h2>📸 Screenshots</h2>

<p>Add screenshots of your application here:</p>

<pre>
screenshots/
├── home.png
├── listings.png
├── listing-details.png
├── create-listing.png
├── login.png
└── signup.png
</pre>

<h2>🧠 What I Learned</h2>

<ul>
  <li>Building a full-stack web application</li>
  <li>MVC architecture</li>
  <li>RESTful routing</li>
  <li>Express.js middleware</li>
  <li>MongoDB and Mongoose</li>
  <li>MongoDB Atlas</li>
  <li>Passport.js authentication</li>
  <li>Authorization and protected routes</li>
  <li>CRUD operations</li>
  <li>Cloudinary image uploading</li>
  <li>EJS templating</li>
  <li>Error handling</li>
  <li>Environment variable management</li>
</ul>

<h2>🔮 Future Improvements</h2>

<ul>
  <li>🗺️ Interactive maps</li>
  <li>🔍 Advanced search and filtering</li>
  <li>❤️ Wishlist functionality</li>
  <li>📍 Location-based recommendations</li>
  <li>💳 Online booking and payment</li>
  <li>📧 Email notifications</li>
  <li>👤 User profile pages</li>
  <li>🌙 Dark mode</li>
</ul>

<h2>🤝 Contributing</h2>

<p>
  Contributions are welcome. Fork the repository, create a new branch,
  make your changes, and submit a pull request.
</p>

<h2>📄 License</h2>

<p>
  This project is created for educational and portfolio purposes.
</p>

<h2>👩‍💻 Author</h2>

<p>
  <strong>Kanak Thapa</strong>
</p>


<p>
  LinkedIn:
  <a href="https://www.linkedin.com/in/kanak-thapa-8178782a2/">
    YOUR_USERNAME
  </a>
</p>

<hr>

<p>
  ⭐ If you found this project useful, consider giving the repository
  a star!
</p>

<p>
  <strong>Built with ❤️ using Node.js, Express.js, MongoDB and EJS.</strong>
</p>