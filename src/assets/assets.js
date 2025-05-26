import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './indmed_logo_transparent.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajiv Mehra',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rajiv Mehra has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '17th Cross, Indiranagar',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Anjali Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: "Dr. Anjali Sharma provides expert gynecological care with a patient-centered approach to women's health.",
        fees: 600,
        address: {
            line1: '27th Cross, Banjara Hills',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Snehansu Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Snehansu Patel is dedicated to offering quality dermatological treatments with an emphasis on early diagnosis and skin health.',
        fees: 300,
        address: {
            line1: '37th Cross, Vile Parle',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Rohan Nair',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Rohan Nair focuses on holistic child healthcare with a gentle and effective treatment methodology.',
        fees: 400,
        address: {
            line1: '47th Cross, Sector 62',
            line2: 'Noida, Uttar Pradesh'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Priya Menon',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Priya Menon specializes in neurological disorders and is dedicated to delivering the best possible care to her patients.',
        fees: 500,
        address: {
            line1: '57th Cross, Marine Drive',
            line2: 'Kochi, Kerala'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Aman Verma',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Aman Verma focuses on diagnosing and treating disorders of the nervous system with modern technology.',
        fees: 500,
        address: {
            line1: '57th Cross, Alkapuri',
            line2: 'Vadodara, Gujarat'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Harshita Das',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Harshita Das practices preventive medicine and believes in early interventions for effective results.',
        fees: 500,
        address: {
            line1: '17th Cross, Unit 4',
            line2: 'Bhubaneswar, Odisha'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Neeraj Bansal',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Neeraj Bansal has years of experience handling complex gynecological cases with compassion.',
        fees: 600,
        address: {
            line1: '27th Cross, Salt Lake',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Kavya Joshi',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Kavya Joshi focuses on cosmetic and clinical dermatology with personalized care.',
        fees: 300,
        address: {
            line1: '37th Cross, Laxmi Nagar',
            line2: 'Delhi'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Manish Sinha',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Manish Sinha is passionate about child wellness and preventive pediatric care.',
        fees: 400,
        address: {
            line1: '47th Cross, Sector 17',
            line2: 'Chandigarh'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Ishita Kapoor',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ishita Kapoor provides expert care in managing neurodegenerative disorders and strokes.',
        fees: 500,
        address: {
            line1: '57th Cross, Tilak Nagar',
            line2: 'Jaipur, Rajasthan'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Arjun Mukherjee',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Arjun Mukherjee excels in treating complex neurological conditions using the latest techniques.',
        fees: 500,
        address: {
            line1: '57th Cross, Kankurgachi',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Meenal Rathi',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Meenal Rathi believes in holistic primary care and treating patients with empathy.',
        fees: 500,
        address: {
            line1: '17th Cross, Patliputra Colony',
            line2: 'Patna, Bihar'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Rakesh Tiwari',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Rakesh Tiwari ensures safe and comfortable treatment for women across all age groups.',
        fees: 600,
        address: {
            line1: '27th Cross, Gomti Nagar',
            line2: 'Lucknow, Uttar Pradesh'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Nandita Pillai',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Nandita Pillai addresses a wide range of skin and hair issues with advanced care.',
        fees: 300,
        address: {
            line1: '37th Cross, Anna Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Suresh Rao',
        image: doc1,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: 'Dr. Suresh Rao specializes in digestive system disorders and has helped thousands with accurate diagnosis and effective treatments.',
        fees: 700,
        address: {
            line1: '67th Cross, MG Road',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Ananya Deshmukh',
        image: doc2,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM',
        experience: '6 Years',
        about: 'Dr. Ananya Deshmukh is a highly skilled Gastroenterologist known for her patient-centric approach and modern treatment methods.',
        fees: 750,
        address: {
            line1: '77th Cross, FC Road',
            line2: 'Pune, Maharashtra'
        }
    },
];
