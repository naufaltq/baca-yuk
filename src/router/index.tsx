import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/home/index";
import Read from "../pages/read";
import Learn from "../pages/learn";
import Quiz from "../pages/quiz";
import Watch from "../pages/watch";
import Adventure from "../pages/read/adventure";
import Nature from "../pages/read/nature";
import BookContent from "../components/books/content";
import NotFound404 from "../pages/404";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="read">
                        <Route index element={<Read />} />
                        <Route path="adventure">
                            <Route index element={<Adventure />} />
                            <Route path=":id" element={<BookContent />} />
                        </Route>
                        <Route path="nature">
                            <Route index element={<Nature />} />
                            <Route path=":id" element={<BookContent />} />
                        </Route>
                    </Route>
                    <Route path="learn">
                        <Route index element={<Learn />} />
                    </Route>
                    <Route path="watch" element={<Watch />} />
                    <Route path="quiz" element={<Quiz />} />
                    <Route path="*" element={<NotFound404/>}></Route>
                </Route>
            </Routes>
            <ScrollToTop/>
            <Footer/>
        </Router>
    )
}

export default AppRouter;