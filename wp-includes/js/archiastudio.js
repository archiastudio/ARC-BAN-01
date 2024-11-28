let apiLink =
	"https://script.google.com/macros/s/AKfycbyPmDBP2KPf_MX64M-_vw1PwF37N-nqJvLzvIDmdJl1qlrq-FHc8Gen8oSRlZf3n1Q/exec"

async function archia() {
	try {
		let data = await (await fetch(`${apiLink}`)).json()
		data = data.slice(-4)

		const blog_html = data.map((f, i) => {
			return `
        <article
	class="jkit-post post-596 post type-post status-publish format-standard has-post-thumbnail hentry category-recipes">
	<div class="jkit-thumb"><a
			href="${data[i].link}">
			<div class="thumbnail-container ">
				<img loading="lazy" decoding="async" width="2000" height="1587"
					src="${data[i].image}"
					class="attachment-full size-full wp-post-image" alt="eggs overeasy in a frying pan, topview"
					srcset="${data[i].image} 2000w, ${data[i].image} 300w, ${data[i].image} 1024w, ${data[i].image} 768w, ${data[i].image} 1536w, ${data[i].image} 800w"
					sizes="(max-width: 2000px) 100vw, 2000px">
			</div>
		</a>
		<div class="jkit-post-category position-left"><span><a href="${data[i].link}"
					class="category-recipes">${data[i].category}</a></span></div>
	</div>
	<div class="jkit-postblock-content">
		<h3 class="jkit-post-title">
			<a
				href="${data[i].link}">${data[i].title}</a>
		</h3>
		<div class="jkit-post-meta">
			<div class="jkit-meta-author icon-position-before"><span class="by">by </span><a
					href="">DT.YashPal</a></div>
			<div class="jkit-meta-date icon-position-before">${new Date(data[i].date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
		</div>
		<div class="jkit-post-meta-bottom">

		</div>
	</div>
</article>`;
		}).join('');
		document.querySelector("#featuredl").insertAdjacentHTML("afterbegin", blog_html);
	} catch (error) {
		console.log(error)
	}
}archia()
function checkCons(){
    let f= document.getElementById("footerl").innerHTML
	if(f.includes("https://archiastudio.com")){

	}else{
		document.getElementById("archiabody").innerHTML = "<h1>Please Dont Remove Credits</h1><br><p>ArchiaStudio</p>"
	}
}checkCons()