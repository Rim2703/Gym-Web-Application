import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Typography } from '@mui/material';

import image1 from '../assets/images/img6.png'
import image2 from '../assets/images/img9.png'
import image3 from '../assets/images/img7.png'
import image4 from '../assets/images/img8.png'

const Testimonials = () => {
    return (
        <div className='container sliders' id='testimonials'>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
                Testimonials
            </Typography>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slide_item'>
                        <div className='slide_img_01'>
                            <img src={image1} alt="pic1" />
                        </div>
                        <h4>Rumila</h4>
                        <p>Excellent Gym Infra/Equipment Passionate, Highly Supportive, Committed & Professional Personal Trainers Very Involved, Positive Management Overall A Very Pleasant & Enriching Experience.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide_item'>
                        <div className='slide_img_02'>
                            <img src={image2} alt="pic2" />
                        </div>
                        <h4>John Smith</h4>
                        <p>Highly Recommended!!!! I'm Glad to Give 5stars for the Professionalism and the benchmark set. The perfect Fitness centre for Fitness Journey with Advanced Equipment's and well trained Professional Trainers.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide_item'>
                        <div className='slide_img_03'>
                            <img src={image3} alt="pic3" />
                        </div>
                        <h4>Jurica</h4>
                        <p>The Workouts are Fun, the Fellow Members are Inspiring, The Workouts are led by Personal Trainers who give hands on instant Feedback and Adjustments during the Workouts and just the right amount of Encouragement. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide_item'>
                        <div className='slide_img_04'>
                            <img src={image4} alt="pic4" />
                        </div>
                        <h4>Emanuel</h4>
                        <p>Super spacious Gym with tons of Facilities, Weight Training, steam bath and much more! Even the trainers are Super Friendly and helped me a lot with my regular Weight Training Workout! </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;
