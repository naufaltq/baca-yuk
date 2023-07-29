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
import Vocab from "../components/vocab";
import VocabContent from "../components/vocabItems/content";
import EmbedYoutubeVideoContent from "../components/watch/embedYTVideo/content";

const AppRouter = () => {
    return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>} />
                        <Route path="read">
                            <Route index element={<Read/>} />
                            <Route path="adventure" element={<Adventure/>} />
                            <Route path="nature" element={<Nature />} />
                            <Route path=":id" element={<BookContent />} />
                        </Route>
                        <Route path="learn">
                            <Route index element={<Learn />} />
                            <Route path="vocabs">
                                <Route index element={<Vocab />} />
                                <Route path=":id" element={<VocabContent />} />
                            </Route>
                        </Route>
                        <Route path="watch">
                            <Route index element={<Watch />} />
                            <Route path=":id" element={<EmbedYoutubeVideoContent />} />
                        </Route>
                        <Route path="watch">
                            <Route index element={<Watch />} />
                        </Route>
                        <Route path="quiz" element={<Quiz />} />
                        <Route path="*" element={<NotFound404/>}></Route>
                    </Route>
                </Routes>
                <ScrollToTop/>
                <Footer />
            </Router>
    );
};

export default AppRouter;