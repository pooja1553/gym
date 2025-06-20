import React from 'react'
import FirstImage from '../FirstImage'
import './Class.css'
import Page from '../Pages/Page'

function Class() {
  return (
    <>
    <FirstImage h1='Classes detail' h3='Classes' s='>' h2=' Body building'/>
    <div className="class-1">
        <div className="class">
        <div className="classes1">
            <div className="class2">
                <div className="class2-1"><img src='https://preview.colorlib.com/theme/gymlife/img/classes/class-details/class-detailsl.jpg.webp'/></div>
                <div className="class2-2">
                    <h4>Body buiding</h4>
                    <p>Build strength, size, and definition with our expert-led bodybuilding programs. We offer customized workout plans, muscle-specific routines, and guidance on proper form and nutrition to help you achieve serious results—whether you're a beginner or a pro.</p>
                </div>
                <div className="class2-2">
                    <h4>Trainer</h4>
                    <p>Our certified and experienced trainers are here to guide, motivate, and support you every step of the way. They create personalized workout plans, monitor your progress, and ensure you train safely and effectively to reach your goals.</p>
                </div>
                <div className="class2-3">
                    <div className='class2-3-1'>
                    <img src="https://preview.colorlib.com/theme/gymlife/img/classes/class-details/trainer-profile.jpg.webp" alt="" />
                    </div>
                    <div className="class2-3-2">
                        <div className='class2-4'>
                            <div className="class2-5">
                                <h5>Athart Rachel</h5>
                                <span>icons</span>
                            </div>
                            <h6>Gym Trainer
                            </h6>
                            <p>With years of experience in fitness and strength training, Athart Rachel specializes in personalized workout routines, weight loss programs, and bodybuilding techniques. </p>
                           
                                <ul className='table-1'>
                                    <li><span>Age</span>35</li>
                                    <li><span>Weight</span>148lbs</li>
                                    <li><span>Height</span>10'2``</li>
                                    <li><span>Occupation</span> no-founder</li>
                                </ul>
                            
                            <p>Known for her motivating style and client-focused approach, she helps every member stay committed and achieve lasting results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="classes2">
            <h5>Categories</h5>
            <ul className='class2-ul'>
                <li><span>Yoga</span>12</li>
                <li><span>Running</span>32</li>
                <li><span>Weightloss</span>86</li>
                <li><span>Cario</span>25</li>
                <li><span>Body building</span>36</li>
                <li><span>Nutrition</span>15</li>
            </ul>
            {/* background image in class5 */}
            <h5 className='class-h5'>Latest posts</h5>
            <div className="class5">
                <h6>This Japanese Way of Making Iced Coffee Is a Game...</h6>
                <span className='grey'>Aug 20, 2019| 20 Comment</span>
            </div>
            <div className='class-images'>
                <div className="class-img"><img src="https://preview.colorlib.com/theme/gymlife/img/letest-blog/latest-2.jpg.webp" alt="" /><div className="class5-1"><p>Grilled Potato and Green Bean Salad</p><p>Aug 15, 2019</p></div></div>
                <div className="class-img"><img src="https://preview.colorlib.com/theme/gymlife/img/letest-blog/latest-3.jpg.webp" alt="" /><div className="class5-1"><p>The $8 French Rosé I Buy in Bulk Every Summer</p><p>Aug 15, 2019</p></div></div>
                <div className="class-img"><img src="https://preview.colorlib.com/theme/gymlife/img/letest-blog/latest-4.jpg.webp" alt="" /><div className="class5-1"><p>Ina Garten's Skillet-Roasted Lemon Chicken</p><p>Aug 15, 2019</p></div></div>
                <div className="class-img"><img src="https://preview.colorlib.com/theme/gymlife/img/letest-blog/latest-5.jpg.webp" alt="" /><div className="class5-1"><p>The Best Weeknight Baked Potatoes, 3 Creative Ways</p><p>Aug 15, 2019</p></div></div>
            </div>
            <div className="class6-img">
                <p>Banner 300x300</p>
            </div>
        </div>
    </div>
  <p className='class-time'>Classes timetable</p>
  </div>
    <Page a2='Monday' a3='Tuesday' a4='Wednesday' a5='Thursday' a6='Friday' a7='Saturday' a8='Sunday' b1='6.00am - 8.00am' b2='WEIGHT LOOSE' b3='Cardio' b4='Yoga' b5='Fitness'b7='Boxing' b8='Body Building' c2='RLefew D. Loee' c3='RLefew D. Loee' c4='Keaf Shen' c5='Kimberly Stone' c7='Rachel Adam' c8='Robert Cage' d1='10.00am - 12.00am' d3='Fitness' d4='WEIGHT LOOSE' d5='Cardio' d6='Body Building' d7='Karate' e3='Kimberly Stone' e4='RLefew D. Loee' e5='RLefew D. Loee' e6='Robert Cage' e7='Donald Grey' f1='5.00pm - 7.00pm' f2='Boxing' f3='Karate' f4='Body Building' f6='Yoga' f7='Cardio' f8='Fitness' g2='Rachel Adam' g3='Donald Grey' g4='Robert Cage' g6='Keaf Shen' g7='RLefew D. Loee' g8='Kimberly Stone' h1='7.00pm - 9.00pm' h2='RLefew D. Loee' h4='Boxing' h5='Yoga' h6='Karate' h7='Boxing' h8='WEIGHT LOOSE' i2='RLefew D. Loee' i4='Rachel Adam' i5='Keaf Shen' i6='Donald Grey' i7='Rachel Adam' i8='RLefew D. Loee'/>
    </>
  )
}

export default Class