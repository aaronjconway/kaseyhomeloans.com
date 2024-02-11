import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    console.log(email)

    // Validate the data - you'll probably want to do more than this

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    if (email && emailRegex.test(email.toString())) {

        return new Response(
            JSON.stringify({
                message: "Anotha one",
            }),
            { status: 200 }
        );
    }

    return new Response(
        JSON.stringify({
            message: "Email Regex Failed."
        }),
        { status: 400 }
    );
};


export const GET: APIRoute = async () => {

    return new Response('GET not allowed', { status: 404 }

    )
}
