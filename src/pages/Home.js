import React from 'react';

const Home = () => {
    return (
        <main id="main">
            <div
                class="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0 jumbotron jumbotron-fluid">
                <div class="text-center container">
                    <h1 class="display-1">Jeremiah Farthing</h1>
                    <div class="Typist lead typist"> Full Stack Web Developer </div>
                    <div class="p-5">
                        <a class="email p-2" href="https://github.com/jefarth" aria-label="Github">
                            <i class="fab fa-github fa-3x socialicons"></i>
                        </a>
                        <a
                            class="email p-2" href="https://www.linkedin.com/in/jeremiah-farthing/"
                            aria-label="My linkedin"><i class="fab fa-linkedin  fa-3x socialicons"></i></a><a
                            class="email p-2" href="mailto:bonilhav@gmail.com">
                            <i class="far fa-envelope fa-3x socialicons"></i>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;