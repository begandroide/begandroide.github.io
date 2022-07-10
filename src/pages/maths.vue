<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import Home2  from './pages/home.md'

function pop(e: any) {
    // Loop to generate 30 particles at once
    for (let i = 0; i < 30; i++) {
        // We pass the mouse coordinates to the createParticle() function
        createParticle(e.clientX, e.clientY);
    }
}

let createParticle = (x: any, y: any) => {
    // Create a custom particle element
    const particle = document.createElement('particle');
    // Append the element into the body
    document.body.appendChild(particle);

    // Calculate a random size from 5px to 25px
    const size = Math.floor(Math.random() * 20 + 5);
    // Apply the size on each particle
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    // Generate a random color in a blue/purple palette
    particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;

    // Generate a random x & y destination within a distance of 75px from the mouse
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;

    // Store the animation in a variable because we will need it later
    const animation = particle.animate([
        {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(${x - (size / 2)}px, ${y - (size / 2)}px)`,
        opacity: 1
        },
        {
        // We define the final coordinates as the second keyframe
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0
        }
    ], {
        // Set a random duration from 500 to 1500ms
        duration: 500 + Math.random() * 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        // Delay every particle with a random value from 0ms to 200ms
        delay: Math.random() * 200
    });
    animation.finish = () => {
        particle.remove();
    }
}
</script>

<template>
    <div class="flex-auto dark:bg-gray-900">
        <div class="flex flex-col items-center gap-2">
            <span class="text-black text-4xl dark:text-white">@begandroide</span>
            <span class="text-gray-800 text-md dark:text-white">Maths</span>
            
            <div class="py-4">
                <button id="button" class="bg-white p-2 rounded border-dark-500 text-lg" @click="pop($event)">Click on me</button>
            </div>
        </div>

    </div>
</template>

<style>
    particle {
        opacity: 0;
        border-radius: 50%;
        left: 0;
        pointer-events: none;
        position: fixed;
        top: 0;
    }
</style>

<route lang="json">
{
  "name": "maths",
  "meta": {
    "requiresAuth": false
  }
}
</route>
