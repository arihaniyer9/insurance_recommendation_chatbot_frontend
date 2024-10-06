import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'; // Call Icon
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import image14 from '../assets/image14.png';
import image15 from '../assets/image15.png';
import image16 from '../assets/image16.png';
import image17 from '../assets/image17.png';
import image18 from '../assets/image18.png';
import image19 from '../assets/image19.png';
import image20 from '../assets/image20.png';
import image21 from '../assets/image21.png';
import image22 from '../assets/image22.png';
import image23 from '../assets/image23.png';
import image24 from '../assets/image24.png';


const CommunityPage = () => {
    const [expanded, setExpanded] = useState(false);

    // Placeholder phone numbers
    const hospitals = [
        {
            name: "St Johns Medical College Hospital",
            address: "193, 1, Hosur Rd, Santhosapuram, Koramangala Industrial Layout, Koramangala, Bengaluru, Karnataka 560034",
            phone: "+91 80 2206 5000",
            image: image14,
            mapLink: "https://www.google.com/maps/dir/37.6896817,-121.8734498/193,+St.+John's+Medical+College+Hospital,+1,+Hosur+Rd,+Santhosapuram,+Koramangala+Industrial+Layout,+Koramangala,+Bengaluru,+Karnataka+560034,+India/@1.8494018,71.7874828,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bae145139112f4d:0xa1c3b929cc88f48e!2m2!1d77.6181705!2d12.9298139?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" // Replace with the actual Google Maps link
        },
        {
            name: "Bangalore Nethralaya",
            address: "Samrudhi Plaza, 714, 5th D Cross Rd, Adjacent to GarbhaGudi IVF Centre, Kalyan Nagar, Babusabpalya, Bengaluru, Karnataka 560043",
            phone: "+91 80 2671 3763",
            image: image15,
            mapLink: "https://www.google.com/maps/dir//XHG2%2B87H+Bangalore+Nethralaya,+NGO's+Quarters,+Police+Quarters,+Rajajinagar,+Bengaluru,+Karnataka+560070,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae3dfaac3a8a03:0x269c3c35745149e6?sa=X&ved=1t:57443&ictx=111" // Replace with the actual Google Maps link
        },
        {
            name: "Belaku Eye Hospital",
            address: "1st Cross, Ring Road, Kengeri Upanagar Stage II, 769, 1st Main Rd, near Railway Bridge, Stage I, Kengeri Satellite Town, Bengaluru, Karnataka 560060",
            phone: "+91 80 2848 6474",
            image: image16,
            mapLink: "https://www.google.com/maps?client=safari&rls=en&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KQukFcsoP647MfD5u9QRxcxw&daddr=1st+Cross,+Ring+Road,+Kengeri+Upanagar+Stage+II,+769,+1st+Main+Rd,+near+Railway+Bridge,+Stage+I,+Kengeri+Satellite+Town,+Bengaluru,+Karnataka+560060,+India://goo.gl/maps/xyz" // Replace with the actual Google Maps link
        },
        {
            name: "BGS Global Hospital",
            address: "67, Uttarahalli Main Rd, Sunkalpalya, Bengaluru, Karnataka 560060, India",
            phone: "+91 85273 06331",
            image: image17,
            mapLink: "https://www.google.com/maps/dir//BGS+GLENEAGLES+GLOBAL+HOSPITALS,+Sunkalpalya,+Bengaluru,+Karnataka+560060,+India/@12.902312,77.4947528,17z/data=!4m18!1m8!3m7!1s0x3bae3f16dfed5c49:0x67c701c77f225318!2sBGS+GLENEAGLES+GLOBAL+HOSPITALS,+Sunkalpalya,+Bengaluru,+Karnataka+560060,+India!3b1!8m2!3d12.9026838!4d77.4976208!16s%2Fg%2F11c3q3_7dh!4m8!1m0!1m5!1m1!1s0x3bae3f16dfed5c49:0x67c701c77f225318!2m2!1d77.4976208!2d12.9026838!3e3?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" // Replace with the actual Google Maps link
        },
        {
            name: "Bhagwan Mahaveer Jain Hospital",
            address: "Millers Rd, Kaverappa Layout, Vasanth Nagar, Bengaluru, Karnataka 560052",
            phone: "+91 80 2253 5353",
            image: image18,
            mapLink: "https://www.google.com/maps?client=safari&rls=en&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KSMsPsZCFq47McvZpn0Vzgxz&daddr=17,+Millers+Rd,+Kaverappa+Layout,+Vasanth+Nagar,+Bengaluru,+Karnataka+560052,+India" // Replace with the actual Google Maps link
        },
        {
            name: "East Point Hospital",
            address: "Jnana Prabha, East Point Campus, Jnana Prabha, East Point Campus, Post, Virgonagar, Aavalahalli, Bengaluru, Karnataka 560049",
            phone: "+91 80 2513 6200",
            image: image19,
            mapLink: "https://www.google.com/maps/dir//3P29%2B38F+East+Point+Hospital+And+College+Of+Medical+Sciences,+Cheemasandra,+Bengaluru,+Karnataka+560049,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae107239481219:0xbb905777c9caf694?sa=X&ved=1t:57443&ictx=111" // Replace with the actual Google Maps link
        },
        {
            name: "HBS Hospital Trust",
            address: "58, Cock Burn Rd, Sulthangunta, Shivaji Nagar, Bengaluru, Karnataka 560051, India",
            phone: "+91 80 2555 5500",
            image: image20,
            mapLink: "https://www.google.com/maps?client=safari&sca_esv=be3cd0e40835ade1&rls=en&sxsrf=ADLYWILn90S6S1BJABgq8qQFsSsb4qvEnA:1728172427725&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiHkhCUyBIb3NwaXRhbCBUcnVzdCBiYW5hZ2hhbG9yZTIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCkjBOlDQLljFOXABeACQAQCYAYQBoAG8CqoBAzcuNrgBA8gBAPgBAvgBAZgCDqACqAvCAgsQABiwAxgIGA0YHsICDhAAGIAEGLADGIYDGIoFwgILEAAYgAQYsAMYogTCAgsQLhiABBjHARivAcICCxAAGIAEGIYDGIoFwgIIEAAYgAQYogTCAgYQABgWGB7CAgUQIRigAcICBRAhGKsCmAMA4gMFEgExIECIBgGQBgiSBwQ0LjEwoAeMOQ&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KavvvZNgFq47MWRaqTP_kXqi&daddr=58,+Cock+Burn+Rd,+Sulthangunta,+Shivaji+Nagar,+Bengaluru,+Karnataka+560051,+India" // Replace with the actual Google Maps link
        },
        {
            name: "HealthCare Global Entreprises Ltd",
            address: "M S R Hospital, New, Bellary Rd, Bengaluru, Karnataka 560054",
            phone: "+91 80 2218 2929",
            image: image21,
            mapLink: "https://www.google.com/maps/dir//Health+Care+Global+Enterprises+Limited,+M+S+R+Hospital,+New,+Bellary+Rd,+Bengaluru,+Karnataka+560054,+India/@13.0287846,77.5477326,14z/data=!4m12!1m2!2m1!1sHealthCare+Global+Entreprises+Ltd+bangalore!4m8!1m0!1m5!1m1!1s0x3bae178e6ae8fa17:0xfb7d31a26459a9f!2m2!1d77.5919039!2d13.047713!3e3?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" // Replace with the actual Google Maps link
        },
        {
            name: "Indira Gandhi Institute of Child Health",
            address: "1st Block, Siddapura, Jayanagar, Bengaluru, Karnataka 560029",
            phone: "+91 80 2244 3143",
            image: image22,
            mapLink: "https://www.google.com/maps/dir//Indira+Gandhi+Institute+Of+Child+Health,+1st+Block,+Siddapura,+Jayanagar,+Bengaluru,+Karnataka+560029,+India/@12.9373826,77.5894829,17z/data=!4m17!1m7!3m6!1s0x3baef97510555555:0x30d7b55e628774d2!2sIndira+Gandhi+Institute+Of+Child+Health!8m2!3d12.9373826!4d77.5920578!16s%2Fg%2F11g6rkn916!4m8!1m0!1m5!1m1!1s0x3baef97510555555:0x30d7b55e628774d2!2m2!1d77.5920578!2d12.9373826!3e3?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" // Replace with the actual Google Maps link
        },
        {
            name: "MS Ramaiah Hospital",
            address: ">MSR College Rd, M S Ramaiah Nagar, Mathikere, Bengaluru, Karnataka 560054",
            phone: "+91 80 4050 2000",
            image: image23,
            mapLink: "https://www.google.com/maps/dir//M+S+RAMAIAH+MEDICAL+COLLEGE+HOSPITAL,+MSR+College+Rd,+M+S+Ramaiah+Nagar,+Mathikere,+Bengaluru,+Karnataka+560054,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae17486f6681d5:0x63b4db01ba0a73c8?sa=X&ved=1t:57443&ictx=111" // Replace with the actual Google Maps link
        },
        {
            name: "MS Ramaiah Narayana Heart Centre",
            address: "New BEL Rd, RMV 2nd Stage, M S Ramaiah Nagar, Mathikere, Bengaluru, Karnataka 560054",
            phone: "+91 1800 309 0309",
            image: image24,
            mapLink: "https://www.google.com/maps?client=safari&rls=en&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KdXMW2s0bK47Ma2JtdL1cGth&daddr=New+BEL+Rd,+RMV+2nd+Stage,+M+S+Ramaiah+Nagar,+Mathikere,+Bengaluru,+Karnataka+560054,+India" // Replace with the actual Google Maps link
        }
    ];

    return (
        <div>
            <Navbar />
            <Grid container spacing={2} justifyContent="space-between" sx={{ p: 5 }}>
                {hospitals.map((hospital, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Box sx={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
                            <Card sx={{ maxWidth: 500 }}>
                                <CardHeader title={hospital.name} />
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={hospital.image}
                                />
                                <CardContent>
                                    <Grid container spacing={3} mt={2} direction="column">
                                        <Grid item>
                                            {/* Address with map icon */}
                                            <IconButton color="inherit">
                                                <PlaceIcon />
                                                <a
                                                    href={hospital.mapLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                                >
                                                    <Typography variant="body1">{hospital.address}</Typography>
                                                </a>
                                            </IconButton>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2, bgcolor: 'blue', color: 'white' }}
                                                href={`tel:${hospital.phone}`}
                                            >
                                                Call
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CommunityPage;