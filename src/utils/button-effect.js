export default function buttonEffect() {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        if (button.querySelectorAll("span.neon").length) {
            return;
        }

        for (let i = 0; i < 4; i++) {
            const span = document.createElement("span");
            span.classList.add("neon");
            button.appendChild(span);
        }
    });
}