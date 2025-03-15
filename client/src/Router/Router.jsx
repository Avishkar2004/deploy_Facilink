import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import BookFacilityAudit from "../Components/BookFacilityAudit.jsx";
import CaseStudies from "../Components/CaseStudies.jsx";
import ClientTestimonial from "../Components/ClientTestimonial.jsx";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header";
import IndustriesweServe from "../Components/IndustriesweServe.jsx";
import Info from "../Components/Info";
import OurClients from "../Components/OurClients.jsx";
import OurServices from "../Components/OurServices.jsx";
import Stats from "../Components/Stats.jsx";
import Manufacturing from "../Components/IndustriesWeServes/Manufacturing/Manufacturing.jsx";
import Pharmaceutical from "../Components/IndustriesWeServes/Pharmaceutical/Pharmaceutical.jsx";
import Healthcare from "../Components/IndustriesWeServes/Healthcare/Healthcare.jsx";
import DataCenter from "../Components/IndustriesWeServes/DataCenter/DataCenter.jsx";
import CommercialSpaces from "../Components/IndustriesWeServes/CommercialSpaces/CommercialSpaces.jsx";
import Residential from "../Components/IndustriesWeServes/Residential/Residential.jsx";
import Education from "../Components/IndustriesWeServes/Education/Education.jsx";
import EngineeringService from "../Components/OurSolutions/EngineeringServices/EngineeringService.jsx";
import SoftServices from "../Components/OurSolutions/SoftServices/SoftServices.jsx";
import BusinessSupportServices from "../Components/OurSolutions/BusinessSupportServices/BusinessSupportServices.jsx";
import ProductionSupportServices from "../Components/OurSolutions/ProductionSupportServices/ProductionSupportServices.jsx";
import HorticultureServices from "../Components/OurSolutions/HorticultureServices/HorticultureServices.jsx";
import HospitalityServices from "../Components/OurSolutions/HospitalityServices/HospitalityServices.jsx";
import PharmaSolutions from "../Components/OurSolutions/PharmaSolutions/PharmaSolutions.jsx";
import DtssOverview from "../Components/AboutUs/DtssOverview/DtssOverview.jsx";
import Blogs from "../Components/ResourceLibrary/Blogs/Blogs.jsx";
import Digitisation from "../Components/IFM/Digitisation/Digitisation.jsx";
import Automation from "../Components/IFM/Automation/Automation.jsx";
import CostOptimisation from "../Components/IFM/CostOptimisation/CostOptimisation.jsx";
import Gallery from "../Components/Gallery/Gallery.jsx";
import BranchLocator from "../Components/BranchLocator/BranchLocator.jsx";
import BlogDetail from "../Components/ResourceLibrary/Blogs/BlogDetail.jsx";
import CreateBlog from "../Components/ResourceLibrary/CreateBlog.jsx";
import UploadPhoto from "../Components/Gallery/UploadPhoto.jsx";


const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null;
}

const AppRouter = () => {
    return (
        <Router>
            <Info />
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={
                    <>
                        <BookFacilityAudit />
                        <Stats />
                        <IndustriesweServe />
                        <OurServices />
                        <ClientTestimonial />
                        <CaseStudies />
                    </>
                } />
                <Route path="/manufacturing-solutions" element={<Manufacturing />} />
                <Route path="/pharmaceutical-facility-management" element={<Pharmaceutical />} />
                <Route path="/healthcare-integrated-facility-management" element={<Healthcare />} />
                <Route path="/commercial-facility-management-services" element={<CommercialSpaces />} />
                <Route path="/data-centre-management-services" element={<DataCenter />} />
                <Route path="/residential-facility-management" element={<Residential />} />
                <Route path="/education-services" element={<Education />} />

                <Route path="/engineering-services" element={<EngineeringService />} />
                <Route path="/soft_services" element={<SoftServices />} />
                <Route path="/business-support-services" element={<BusinessSupportServices />} />
                <Route path="/production-support-services" element={<ProductionSupportServices />} />
                <Route path="/horticulture_services" element={<HorticultureServices />} />
                <Route path="/hospitality_services" element={<HospitalityServices />} />
                <Route path="/pharma_support" element={<PharmaSolutions />} />

                <Route path="/about-us" element={<DtssOverview />} />

                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<BlogDetail />} />
                <Route path="/createblogs" element={<CreateBlog />} />
                <Route path="/digitisation-solutions" element={<Digitisation />} />
                <Route path="/automation-solutions" element={<Automation />} />
                <Route path="/cost_optimization" element={<CostOptimisation />} />

                <Route path="/gallery" element={<Gallery />} />
                <Route path="/UploadPhoto" element={<UploadPhoto />} />
                <Route path="/branch-locator" element={<BranchLocator />} />
            </Routes>
            <OurClients />
            <Footer />
        </Router>
    )
}

export default AppRouter