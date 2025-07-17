<template>
    <div>
        <video
            ref="video"
            src="/videos/sample.mp4"
            loop
            muted
            playsinline
            preload="auto"
        />
    </div>
</template>

<script setup lang="ts">
    const video = ref(null);

    onMounted(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.value?.play();
                } else {
                    video.value?.pause();
                }
            },
            { threshold: .2 }
        );

        if (video.value) {
            observer.observe(video.value);
        }
    });
</script>