const movies = {
    movie1: {
        title: "The Flash",
        description: "يسعى باري آلين لاستغلال قدراته من أجل تغيير ماضيه وإنقاذ والدته من الموت، ولكن تتسبب محاولاته في خلل بالزمن والعوالم الموازية، ويصارع من أجل إنقاذ المستقبل",
        videoSrc: "DC/Movies/The Flash Movie/The Flash.mp4"
    },
    movie2: {
        title: "Justice League 1",
        description: "يبدأ (بروس واين) في استعادة ثقته بالإنسانية، ويعزم على تجميع فريق العدالة للدفاع عن الأرض، ويطلب من حليفته الجديدة (الأميرة ديانا) مساعدته في مواجهة أكبر عدو على الإطلاق، وتجنيد فريق العدالة للوقوف ضد هذا التهديد، ويهب (باتمان)، (المرأة العجيبة)، (أكوامان)، (سايبورج)، (الفلاش) لإنقاذ كوكب الأرض",
        videoSrc: "DC/Movies/Justice.League~/[EgyBest].Justice.League.2017.BluRay.360p.x264.mp4"
    },
    movie3: {
        title: "Justice League 2",
        description: "يجمع بروس وين مجموعة من الأبطال الخارقين من أجل الدفاع عن البشرية ضد داركسايد والحفاظ على تضحيات سوبرمان الراحل، ولكن سرعان ما تقع كوارث مروعة تدفع الفريق إلى فعل المستحيل",
        videoSrc: "DC/Movies/Justice.League~/Zack.Snyders.Justice.League.2021.720p.HMAX.WEB-DL.MyCima.TO.mp4"
    },
    movie4: {
        title: "Aquaman 1",
        description: "يدرك (آرثر كاري) أنه وريث مملكة (أتلانتيس) تحت الماء، وعليه أن يرنو إلى قيادة شعبه ليصبح بطلهم الأول، ومن ثَم بطل العالم",
        videoSrc: "DC/Movies/Aquaman/Aquaman.2018.480p.BluRay.MyCima.dev.mp4"
    },
    movie5: {
        title: "Aquaman 2",
        description: "يسعى (أرثر) مستعينًا بمساعدة (أورم) لإنقاذ (أتلانتس) والتصدي لـ(بلاك مانتا)، والذي يسعى لاستغلال سلاح جديد وتسخيره في سبيل الانتقام لموت والده، وتتوالى الأحداث",
        videoSrc: "DC/Movies/Aquaman/Aquaman 2.mp4"
    },
    movie6: {
        title: "Batman v Superman Dawn of Justice",
        description: "تدور أحداث الفيلم في مدينة جوثام حول المواجهة المرتقبة بين كل من سوبرمان والبطل الخيالي باتمان أو الرجل الوطواط مع وجود مجموعة متعددة من الأبطال الخارقين، ليحتد الصراع فيما بينهم، وبينما ينشغل كلهما بقتال الآخر، تتعرض المدينة والبشرية لخطر محدق بهما يدفع البطلين لضرورة التصدي له وتجاوز ما بينهما",
        videoSrc: "https://terabox.com/s/1JEPnee9B-1dARufIFArsmw"
    },
    movie7: {
        title: "",
        description: " ",
        videoSrc: ""
    },
};

function showMovieDetails(movieId) {
    const movie = movies[movieId];
    document.getElementById('movie-title').innerText = movie.title;
    document.getElementById('movie-description').innerText = movie.description;
    const video = document.getElementById('movie-video');
    const videoSource = document.getElementById('movie-video-source');
    videoSource.src = movie.videoSrc;
    video.load();  // Reload the video to apply the new source

    // Show movie details and hide the movie list
    document.getElementById('movie-details').style.display = 'block';
    document.getElementById('movie-list').style.display = 'none';
}

function goBack() {
    // Hide movie details and show the movie list
    document.getElementById('movie-details').style.display = 'none';
    document.getElementById('movie-list').style.display = 'flex';
}

function searchMovies() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const movieList = document.getElementById('movie-list');
    const movieItems = movieList.getElementsByClassName('movie-item');
    let foundItems = [];

    for (let i = 0; i < movieItems.length; i++) {
        const item = movieItems[i];
        const title = item.getElementsByTagName('p')[0].innerText.toLowerCase();
        if (title.includes(query)) {
            foundItems.push(item.parentElement); // parentElement refers to the <section class="part">
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }

    const parts = movieList.getElementsByClassName('part');
    for (let part of parts) {
        part.style.display = 'none';
    }

    for (let foundItem of foundItems) {
        foundItem.style.display = 'block';
    }
}

function resetSearch() {
    const movieList = document.getElementById('movie-list');
    const movieItems = movieList.getElementsByClassName('movie-item');

    for (let i = 0; i < movieItems.length; i++) {
        movieItems[i].style.display = 'block';
    }

    const parts = movieList.getElementsByClassName('part');
    for (let part of parts) {
        part.style.display = 'block';
    }

    document.getElementById('searchInput').value = '';
}