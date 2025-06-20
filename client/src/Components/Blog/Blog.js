import React from 'react'
import FirstImage from '../FirstImage'
import './Blog.css'

function Blog() {
  return (
    <>
    <div className="blog">
        <FirstImage h1='Our Blog' s='>' h3='Pages' h2=' Blog'/>
        <div className="blog1">
            <div className="blog2">
                <div className="blog2-1">
                    <img src="https://preview.colorlib.com/theme/gymlife/img/blog/blog-1.jpg.webp" alt="" />
                    <div className="blog4" >
                        <p><b>Quick Post-Workout Meals</b></p>
                        <div><p>by Sneha Mehta | Aug,15, | 2019 20 Comment</p>
                <p>Refuel your body fast with these nutritious, easy-to-make meals that support muscle recovery, boost energy, and keep your fitness goals on track.</p></div></div></div>

                <div className="blog2-1"><img src="https://preview.colorlib.com/theme/gymlife/img/blog/blog-2.jpg.webp" alt="" /><div className="blog4">
                    <p><b>Stretching: Why It Matters</b></p>
                    <div><p>by Rohit Verma | Aug,15, | 2019 22 Comment</p>
                    <p>Stretching improves flexibility, reduces injury risk, boosts blood flow, and relieves muscle tension—essential for recovery and long-term fitness success.</p></div></div></div>

                <div className="blog2-1"><img src="https://preview.colorlib.com/theme/gymlife/img/blog/blog-3.jpg.webp" alt="" /><div className="blog4"><p><b> Stay Hydrated, Stay Strong</b></p>
                <div><p>by Neha Sharma | Aug,15, | 2019 25 Comment</p>
                <p>Water is key for energy, endurance, and muscle recovery. Learn how proper hydration can enhance your workouts and overall health every day.</p></div></div></div>

                <div className="blog2-1"><img src="https://preview.colorlib.com/theme/gymlife/img/blog/blog-4.jpg.webp" alt="" /><div className="blog4"><p><b>Cardio vs. Strength: What’s Better?</b></p>
                <div><p>by Vikram Singh | Aug,15, | 2019 27 Comment</p>
                <p>Both cardio and strength training have unique benefits. Discover which one suits your fitness goals and how to balance both for better results.</p></div></div></div>

                <div className="blog2-1"><img src="https://preview.colorlib.com/theme/gymlife/img/blog/blog-5.jpg.webp" alt="" /><div className="blog4"><p><b>Vegan White Peach Mug Cobbler</b></p>
                <div><p>by Athart Rachel | Aug,15, | 2019 20 Comment</p>
                <p>Try this quick, healthy dessert made with fresh peaches and clean ingredients—perfect for a light, delicious treat after your gym session.</p></div></div></div>
                
                <div className="btn-plan">
                <button className='btn-plan1'>1</button>
                <button className='btn-plan1'>2</button>
                <button className='btn-plan1'>3</button>
                <button className='btn-plan2'>NEXT</button>
                </div>
                </div>
            <div className="blog3">
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
            <div >
                <p><b>POPULAR TAGS</b></p>
                <div className="blog-p">
                <span>Gyming</span><span>Body building</span><span>Yoga</span><span>Weightloss</span><span>Proffeponal</span><span>Streching</span><span>Cardio</span><span>Karate</span>
            </div>
            </div>
        </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog