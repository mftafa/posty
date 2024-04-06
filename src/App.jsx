import { Routes, Route } from 'react-router-dom';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./routes/web/Home/Home.jsx";
import Posts from "./routes/web/Posts/Posts.jsx";
import About from "./routes/web/About.jsx";
import Contact from "./routes/web/Contact.jsx";
import Dashboard from "./routes/admin/Dashboard.jsx";
import CreatePost from "./routes/admin/Post/CreatePost.jsx";
import ContactList from "./routes/admin/Contact/ContactList.jsx";
import "./App.css";
function App() {

    return (
        <>
            <div>
                <Header />
                <main className="min-h-screen">
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/posts" element={<Posts />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/create-post" element={<CreatePost />} />
                            <Route path="/contact-list" element={<ContactList />} />
                        </Routes>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
