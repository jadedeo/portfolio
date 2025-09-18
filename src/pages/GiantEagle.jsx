import { useRef } from "react";

import Hero from "../components/Hero";
import Header from "../components/Header";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import FadeSection from "../components/FadeSection";
import StickyNote from "../components/StickyNote";
import ChatBubble from "../components/ChatBubble";

import useScrollDirection from "../hooks/useScrollDirection";
import useInView from "../hooks/useInView";
import projectList from "../resources/projectList.json";

// TODO: possibly show even earlier iterations

const GiantEagle = () => {
    let projectData = projectList.find(
        (project) => project.title === "AR for Accessibility"
    );

    const scrollDir = useScrollDirection();
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { threshold: 0.1 });

    return (
        <>
            <Header useLightLogo={isHeroInView} />
            <main className="mb-[50px] min-h-dvh ">
                <section ref={heroRef} className="h-dvh">
                    <Hero
                        project={projectData}
                        image="gianteagle/groceryBagLight.png"
                    />
                </section>
                <div className="flex flex-col gap-[25px] md:gap-[50px] lg:gap-[100px] px-[5%] mt-[100px]">
                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto ">
                            <TextImage
                                heading="what we designed"
                                imageAlt="Two images of key points in the AR experience"
                                image="gianteagle/preview.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    As is the case with most large supermarkets,
                                    Giant Eagle stocks an enormous array of
                                    products & brands (including their own),
                                    providing shoppers with near-endless
                                    options.
                                </p>
                                <p>
                                    <strong className="highlight">
                                        The size of these stores & the sheer
                                        variety of items can both allow for much
                                        appreciated flexibility for some &
                                        create overwhelming complexity for
                                        others.
                                    </strong>{" "}
                                    We’ve identified this as a promising problem
                                    space.
                                </p>
                                <p>
                                    By leveraging the capabilities of AR in
                                    uniquely designed glasses, we aim to improve
                                    the accessibility of shopping at Giant Eagle
                                    for users with ADHD. Our solution
                                    specifically targets challenges users have
                                    expressed related to excessive visual
                                    stimulation.
                                </p>
                                {/* TODO: something is off here */}
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <TextGroup heading="how it works"></TextGroup>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20">
                                <TextImage
                                    subheading="Create your shopping list"
                                    imageAlt="TODO: add alt"
                                    image="gianteagle/appUnchecked.png"
                                    imageSize="small"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="01"
                                >
                                    <p>
                                        Use the existing Giant Eagle app to
                                        create your shopping list. You may also
                                        optionally configure your AR experience
                                        ahead of time.
                                    </p>
                                </TextImage>

                                <TextImage
                                    subheading="Pick up your glasses"
                                    imageAlt="TODO: add alt"
                                    image="gianteagle/customerService.png"
                                    imageSize="small"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="02"
                                >
                                    <p>
                                        Once in-store, visit the customer
                                        service desk to request a pair of
                                        glasses. After your trip is completed,
                                        they can also be dropped off here for
                                        sanitizing.
                                    </p>
                                </TextImage>

                                <TextImage
                                    subheading="Sync your list & glasses"
                                    imageAlt="TODO: add alt"
                                    image="gianteagle/appQr.png"
                                    imageSize="small"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="03"
                                >
                                    <p>
                                        Pull up the QR code in-app and view
                                        through your glasses to import your
                                        shopping list. If needed, complete an
                                        onboarding sequence to get the hang of
                                        controls.
                                    </p>
                                </TextImage>

                                <TextImage
                                    subheading="Enter the experience"
                                    imageAlt="TODO: add alt"
                                    image="gianteagle/aisleColored.png"
                                    imageSize="small"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="04"
                                >
                                    <p>
                                        Filter out distractions and follow
                                        optimized directions for a more
                                        efficient shopping trip (before and
                                        after above).
                                    </p>
                                </TextImage>
                                <TextImage
                                    subheading="Locate your items"
                                    imageAlt="TODO: add alt"
                                    image="gianteagle/aisleItem.png"
                                    imageSize="small"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="05"
                                >
                                    <p>
                                        Follow clear indicators and easily sort
                                        out your target items from everything
                                        extraneous.
                                    </p>
                                </TextImage>
                                <TextImage
                                    subheading="Complete your list"
                                    imageAlt="TODO: add alt"
                                    image="gianteagle/appChecked.png"
                                    imageSize="small"
                                    addImageShadow={false}
                                    mat={false}
                                    imagePlacement="bottom"
                                    numbered="06"
                                >
                                    <p>
                                        Find everything you need, and get in and
                                        out in record timing. Don't forget to
                                        return your glasses to customer service!
                                    </p>
                                </TextImage>
                            </div>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            {/* TODO: add more explanation here */}
                            <TextGroup heading="why we designed it">
                                <p>
                                    Through surveying a number of ADHD- and/or
                                    neurodivergency-centered online spaces, we
                                    identified several recurring painpoints that
                                    surfaced when grocery shopping. These
                                    influenced the characteristics of our
                                    experience.
                                </p>
                            </TextGroup>

                            <section className="grid grid-cols-1 md:grid-cols-2 items-end justify-items-center gap-5">
                                <div className="flex flex-col">
                                    <div className="flex flex-col lg:flex-row lg:gap-5">
                                        <ChatBubble direction="in">
                                            <strong>
                                                Grocery shopping is sensory
                                                hell.
                                            </strong>{" "}
                                            The lights are too bright, there is
                                            a lot of sounds, smells, and a lot
                                            going on.
                                            <a
                                                href="https://www.reddit.com/r/ADHD/comments/wvn80k/comment/ilh6ldt/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="hover:underline text-gray-400"
                                            >
                                                <p className="text-sm text-right">
                                                    r/ADHD | Overstimulated
                                                    while grocery shopping?
                                                </p>
                                            </a>
                                        </ChatBubble>
                                        <ChatBubble direction="in">
                                            ... if I need more than a couple of
                                            things, my SO has to go with me.{" "}
                                            <strong>
                                                It's too overwhelming for me to
                                                do by myself.
                                            </strong>
                                            <a
                                                href="https://www.reddit.com/r/ADHD/comments/c1a3cm/comment/erc93va/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="hover:underline text-gray-400"
                                            >
                                                <p className="text-sm text-right">
                                                    r/ADHD | Grocery shopping is
                                                    the natural enemy
                                                </p>
                                            </a>
                                        </ChatBubble>
                                    </div>
                                    <StickyNote className="mx-auto mt-5">
                                        <p>
                                            ADHD shoppers experience sensory
                                            overload and decision fatigue ,
                                            which can be debilitating.
                                        </p>
                                        <img src="gianteagle/brain.png" />
                                    </StickyNote>
                                </div>
                                <div className="flex flex-col">
                                    <div>
                                        <ChatBubble direction="out">
                                            <p>
                                                <strong>
                                                    ... even if I go in with a
                                                    list, once I get into the
                                                    grocery store I'm
                                                    overwhelmed by everything
                                                </strong>{" "}
                                                and find it hard to just go in
                                                grab the things I need and get
                                                out.
                                            </p>
                                            <p>
                                                I get stuck looking at
                                                everything and its time
                                                consuming and often stressful.
                                            </p>
                                            <a
                                                href="https://www.reddit.com/r/ADHD/comments/c1a3cm/comment/erbwi0x/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="hover:underline text-gray-400"
                                            >
                                                <p className="text-sm text-right">
                                                    r/ADHD | Grocery shopping is
                                                    the natural enemy
                                                </p>
                                            </a>
                                        </ChatBubble>
                                    </div>
                                    <StickyNote className="mx-auto mt-5">
                                        <p>
                                            Grocery lists help shoppers approach
                                            shopping with a plan , but they
                                            still spend a lot of time in the
                                            store.
                                        </p>
                                        <img src="gianteagle/list.png" />
                                    </StickyNote>
                                </div>
                            </section>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto ">
                            <TextGroup heading="overall functionality" />
                            <section className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5 mt-5">
                                <StickyNote>
                                    <div>
                                        <p className="line-through decoration-[1px] text-yellow-600">
                                            View full shopping list
                                        </p>
                                        <p className="font-semibold">
                                            View current item only
                                        </p>
                                    </div>
                                    <p>
                                        Carousels & scrollable lists created too
                                        much visual clutter, which we're trying
                                        to cut down on.
                                    </p>
                                </StickyNote>

                                <StickyNote>
                                    <div>
                                        <p className="line-through decoration-[1px] text-yellow-600">
                                            Edit shopping list
                                        </p>
                                        <p className="font-semibold">
                                            Skip/delete current item
                                        </p>
                                    </div>
                                    <p>
                                        Full editing capabilities (searching,
                                        reordering, etc.) would introduce too
                                        much complexity and require more
                                        granular controls, suggesting bulkier
                                        hardware.
                                    </p>
                                </StickyNote>

                                <StickyNote>
                                    <div>
                                        <p className="line-through decoration-[1px] text-yellow-600">
                                            Receieve recommendations for generic
                                            items in-experience
                                        </p>
                                        <p className="font-semibold">
                                            No in-experience recommendations
                                        </p>
                                    </div>
                                    <p>
                                        Meant to solve for cases where users add
                                        just "bread" to their list, we planned
                                        to use pre-set preferences to make
                                        suggestions for specific products while
                                        shopping -
                                    </p>
                                    <p>
                                        But providng personalized
                                        recommendations would be most effective
                                        during in-app shopping list creation.
                                    </p>
                                </StickyNote>

                                <StickyNote>
                                    <p className="font-semibold">
                                        Control basic experience settings
                                    </p>

                                    <p>
                                        In addition to being able to configure
                                        settings in-app, users should be able to
                                        make adjustments from inside the
                                        experience.
                                    </p>
                                </StickyNote>

                                <StickyNote>
                                    <p className="font-semibold">Way-finding</p>
                                    <p>
                                        Though users can change how they prefer
                                        to navigate the store through in-app
                                        settings, the experience guides them
                                        along the most optimized route by
                                        default.
                                    </p>
                                </StickyNote>
                            </section>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
                            <TextImage
                                heading="evaluating existing hardware"
                                imageAlt="Image of the RayNeo X2s"
                                image="gianteagle/rayneo.png"
                                addImageShadow={false}
                            >
                                <p>
                                    We had a checklist of requirements when
                                    seeking out the best device to model our
                                    experience around, but soon found that they
                                    couldn’t all be met by an existing product.
                                </p>

                                <p>
                                    The{" "}
                                    <strong className="highlight">
                                        <a
                                            className="underline"
                                            href="https://www.rayneo.com/products/tcl-rayneo-x2?srsltid=AfmBOoq9WdgyyYHJm3EXgnE_3tgTXjWF206wtdcatxhQnlsD42NwpA9w"
                                        >
                                            RayNeo X2s
                                        </a>
                                    </strong>{" "}
                                    came the closest. In addition to
                                    consolidated hardware, they offered a
                                    limited set of interactions that remain
                                    confined to the glasses themselves that
                                    we’ve adopted for our experience. To satisfy
                                    the other items on our list, we designed &
                                    propose a more adaptable frame.
                                </p>
                            </TextImage>

                            <section className="flex gap-5 flex-wrap mt-5 justify-center">
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>
                                            Hardware use would not alienate user
                                            in GE’s public setting.
                                        </strong>
                                    </p>
                                    <p>
                                        {"\u2611"} Reasonably inconspicuous
                                        (likely won’t include hand or eye
                                        tracking)
                                    </p>
                                </StickyNote>
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>
                                            Hardware would not be overly
                                            difficult for GE to monitor &
                                            maintain.
                                        </strong>
                                    </p>
                                    <p>
                                        {"\u2611"} Does not require additional
                                        equipment (puck, battery pack, etc.)
                                    </p>
                                    <p>
                                        {"\u2610"} Does not require the purchase
                                        of many slight variations to suit many
                                        users
                                    </p>
                                </StickyNote>
                                <StickyNote>
                                    <p className="font-semibold">
                                        <strong>
                                            Hardware can be used communally.
                                        </strong>
                                    </p>
                                    <p>
                                        {"\u2610"} Can accommodate physical
                                        differences in users
                                    </p>
                                    <p>
                                        {"\u2610"} Can be worn with (most)
                                        prescription eyewear
                                    </p>
                                </StickyNote>
                            </section>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-10 ">
                            <TextImage
                                heading="designing a more adaptable hardware solution"
                                subheading="Specifications"
                                imageAlt="Annotated diagrams of the revised glasses"
                                image="gianteagle/glassesAnnotated.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    Our imagined solution includes the following
                                    features.
                                </p>
                            </TextImage>

                            <TextImage
                                subheading="Iteration"
                                imageAlt="Before & after of glasses"
                                image="gianteagle/glassesIteration.png"
                                addImageShadow={false}
                            >
                                <p>
                                    Hardware was revised with thicker frames to
                                    better accommodate mechanical components.
                                </p>
                            </TextImage>
                            {/* </div> */}
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="flex flex-col gap-10 mt-5">
                            <TextImage
                                heading="interactions & gestures"
                                imageAlt="Close-up of glasses touch panels & annotations of gestures users can perform"
                                image="gianteagle/sliderAnnotated.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    Users may make these 3 gestures on either of
                                    the glasses’ touch panels to interact with
                                    UI elements.
                                </p>
                            </TextImage>
                            <section className="max-w-screen-lg mx-auto flex flex-col gap-10">
                                <TextImage
                                    subheading="Cycling through the primary UI elements"
                                    imageAlt="Use of sliding gesture to navigate through the main 'on-screen' elements"
                                    image="gianteagle/navCircuit.gif"
                                    addImageShadow={false}
                                    imagePlacement="right"
                                    mat={false}
                                >
                                    <p>
                                        The sliding gesture is used to navigate
                                        through the main 'on-screen' elements.
                                        Sliding forward moves to the next
                                        element, while sliding backwards
                                        revisits to the previous element.
                                    </p>
                                </TextImage>
                                <TextImage
                                    subheading="Skipping the current item"
                                    imageAlt="Use of sliding & single-tap gestures to skip current item/proceed to the next item on the list"
                                    image="gianteagle/skip.gif"
                                    addImageShadow={false}
                                    imagePlacement="right"
                                    mat={false}
                                >
                                    <p>
                                        The sliding and single-tap gestures are
                                        used in combination to skip the current
                                        item and proceed to the next item on the
                                        list. After a period of inactivity,
                                        focus returns to the current item.
                                    </p>
                                </TextImage>
                            </section>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto">
                            <TextImage
                                heading="components & ui design"
                                imageAlt="Annotated images of key components to the AR experience"
                                image="gianteagle/fullAnnotated.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            />
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto">
                            <TextImage
                                subheading="Shopping List Component"
                                imageAlt="giant eagle glasses"
                                image="gianteagle/shoppingListAnnotated.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    This component is perhaps most central to
                                    the experience. It displays the user's
                                    current target, as well as their overall
                                    cart total & other information as is
                                    relevant to each variant.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto">
                            <TextImage
                                subheading="Setting Controls"
                                imageAlt="Various states of the settings component"
                                image="gianteagle/settingsComponent.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    The user may interact with the settings menu
                                    through the gestures mentioned previously.
                                </p>
                                <p>
                                    <strong className="highlight">
                                        Sliding along either of the touch panels
                                    </strong>{" "}
                                    will progress them through the available
                                    configuration options.{" "}
                                    <strong className="highlight">
                                        Tapping once
                                    </strong>{" "}
                                    will allow them to select a specific setting
                                    or setting option o configure.{" "}
                                    <strong className="highlight">
                                        Double tapping
                                    </strong>{" "}
                                    will move them back into the previous state.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto">
                            <TextImage
                                subheading="Iteration on Item Addition"
                                imageAlt="Annotated images of the current component used for adding an item to the cart, as well as the original design"
                                image="gianteagle/addItemAnnotated.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    The original process for adding a located
                                    item to one's cart was both unclear and
                                    incomplete. This revision clarifies
                                    available actions and more seamlessly feeds
                                    into the rest of the experience.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto">
                            <TextImage
                                subheading="Addition of Focus States"
                                imageAlt="Focus states for various components"
                                image="gianteagle/focusStatesAnnotated.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    As part of my independent revisions,
                                    consistent focus states were incorporated to
                                    enhance clarity when using the glasses'
                                    controls. These make it more apparent the
                                    user which element they are performing
                                    actions on.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto ">
                            <TextImage
                                heading="mobile app integration"
                                subheading="Configuring the Experience"
                                imageAlt="Settings that can be used to customize the AR experience from within the mobile app"
                                image="gianteagle/allConfig.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    Users can adjust certain parts of their
                                    experience (eg. font size & filter opacity)
                                    before picking up their glasses in-store.
                                    This can be accomplished by finding AR
                                    Experience Settings under the Profile of the
                                    GE app.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto ">
                            <TextImage
                                subheading="Launching the Experience"
                                imageAlt="Basic flow showing progression from the user's shopping list to the QR code used to sync the glasses in-store"
                                image="gianteagle/listToCode.png"
                                addImageShadow={false}
                                imagePlacement="bottom"
                            >
                                <p>
                                    Once users have made their shopping list &
                                    are in-store with their glasses ready to go,
                                    they’ll be prompted by the device to bring
                                    up the QR code used to pair their GE
                                    account. This can be done by tapping the
                                    icon in the upper left of their list page.
                                </p>
                            </TextImage>
                        </section>
                    </FadeSection>

                    <FadeSection scrollDir={scrollDir}>
                        <section className="py-[50px] w-full max-w-screen-lg mx-auto ">
                            <TextGroup heading="other considerations & caveats" />

                            <div className="flex flex-col gap-15">
                                {/* TODO: make into component */}
                                <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-0 sm:gap-5 justify-items-center">
                                    <img
                                        src="gianteagle/money.png"
                                        className="max-w-[200px] sm:w-auto "
                                    />
                                    <TextGroup subheading="Business Implications">
                                        <p>
                                            We recognize that essentially
                                            “hiding” the vast majority of items
                                            may not be seen to be in GE’s best
                                            interest - retail relies on enticing
                                            shoppers by keeping products in
                                            plain view.
                                        </p>
                                        <p>
                                            We would like to make the case that
                                            making stores more accessible to
                                            people of varied sensitivities is a
                                            smarter business move than forcing
                                            them to endure an uncomfortable
                                            experience.
                                        </p>
                                        <p>
                                            Investing in the comfort of
                                            customers is likely to strengthen
                                            overall trust & loyalty over time.
                                        </p>
                                    </TextGroup>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-0 sm:gap-5 justify-items-center">
                                    <img
                                        src="gianteagle/inventory.png"
                                        className="max-w-[200px] sm:w-auto "
                                    />
                                    <TextGroup subheading="Reliance on Unchanging Organization">
                                        <p>
                                            The efficacy of this solution
                                            requires that the placement of store
                                            inventory be carefully regulated.
                                        </p>
                                        <p>
                                            Shifting the location of items
                                            without these changes being recorded
                                            behind-the-scenes would make it
                                            impossible to provide accurate
                                            navigational information.
                                        </p>
                                    </TextGroup>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-0 sm:gap-5 justify-items-center">
                                    <img
                                        src="gianteagle/eye.png"
                                        className="max-w-[200px] sm:w-auto "
                                    />
                                    <TextGroup subheading="Assumptions of Ability">
                                        <p>
                                            In order to interact with the
                                            glasses’ controls,{" "}
                                            <strong>
                                                users will need to (at least
                                                briefly) have one hand free
                                            </strong>
                                            . Looking into providing a
                                            voice-control option could be a
                                            helpful alternative.
                                        </p>
                                        <p>
                                            <strong>
                                                As a medium, AR assumes some
                                                level of visual acuity
                                            </strong>
                                            . However, the auditory component of
                                            the experience & it’s reliance on
                                            the contract of bright signals in a
                                            dulled environment may still make it
                                            suitable for those with
                                            partial/reduced vision.
                                        </p>
                                        <p>
                                            <strong>
                                                Subtitles/CC are not provided
                                                with the experience
                                            </strong>
                                            , because audio is a purely optional
                                            feature. The experience is, by
                                            default, accessible to the
                                            hearing-impaired.
                                        </p>
                                    </TextGroup>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-0 sm:gap-5 justify-items-center">
                                    <img
                                        src="gianteagle/glasses.png"
                                        className="max-w-[200px] sm:w-auto "
                                    />
                                    <TextGroup subheading="Technological Limitations">
                                        <p>
                                            We acknowledge that our experience
                                            assumes a level of performance just
                                            beyond the current capabilities of
                                            AR devices. However, we imagine
                                            that, with constant advancement in
                                            the field, these limitations will
                                            decrease in a few short years.
                                        </p>
                                        <p>
                                            <strong>Field of view (FoV)</strong>{" "}
                                            will likely expand RayNeo X2’s
                                            currently have a FoV of 25°, but the
                                            industry average is about 30-50°
                                        </p>
                                        <p>
                                            <strong>Resolutio</strong>n will
                                            likely increase RayNeo X2’s
                                            currently have a resolution of
                                            640x480 per eye, but the RayNeo Air
                                            3S XREAL One both reach 1920x1080
                                        </p>
                                    </TextGroup>
                                </div>
                            </div>
                        </section>
                    </FadeSection>
                </div>
            </main>
        </>
    );
};

export default GiantEagle;
