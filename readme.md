you play application

: it is a video streaming app

used dependences:

    bcrypt
    cloudinary
    cookie-parser
    cors
    dotenv
    express
    jsonwebtoken
    mongoose
    mongoose-aggregate-paginate-v2
    multer

functionality :

    🦸(user) :
        userSchema:
            userName
            email
            fullName
            avatar
            coverImage
            watchHistory:[]
            password
            refreshToken


        user Roughts _________________________________________________

            Note: prefix : /api/v1/users

            A: /register                (post)

                fields:
                    userName    :   REQUIRED
                    email       :   REQUIRED
                    fullName    :   REQUIRED
                    avatar      :   REQUIRED
                    coverImage  :       -
                    password    :   REQUIRED

            B: /Login                   (post)

                fields:
                    userLoginDetails    :   REQUIRED (userName or email)
                    password            :   REQUIRED


            C: /user-update             (patch)

                fields:
                    email               :       -
                    username            :       -
                    fullName            :       -

            D: /avatar-update           (patch)

                fields:
                    avatar              :       REQUIRED

            E: /cover-update            (patch)

                fields:
                    coverImage          :       REQUIRED


            F: /delete-Cover-Image      (patch)

                fields
                        ################################


            G: /update-password         (patch)

                fields:
                    oldPassword         :   REQUIRED
                    newPassword         :   REQUIRED


            H: /delete-user             (delete)

                fields:
                    ################################


            I: /get-subscription/:id?   (get)

                fields:
                    ################################


            J: /get-uploded-videos      (get)

                fields:
                    ################################

            K: /watchlist               (get)

                fields:
                    ################################
            L: /watchlist/:videoId      (delete)

                fields:
                    ################################


            M: /watchlist               (delete)

                fields:
                    ################################

            N: /logout                  (post)

                fields:
                    ################################



    📹(video) :
        videoSchema:
            videoFile
            thumbnail
            title
            description
            duration
            views
            isPublished
            owner

        video Roughts:____________________________________________

            Note: prefix : /api/v1/videos

            A: /                                (post)

                fields:
                    video               :       REQUIRED
                    thumbnail           :       REQUIRED
                    title               :       REQUIRED
                    description         :       REQUIRED


            B: /                                 (get)

                fields:
                    ################################       

            C: /likes/:videoId                  (get)

                fields:
                    ################################

            D: /likes/:videoId                  (post)

                fields:
                    ################################

            E: /:videoId                        (get)

                fields:
                    ################################

            F: /:videoId                        (delete)

                fields:
                    ################################


            G: /update-video-details/:videoId   (patch)

                fields:

                    thumbanail
                    title
                    description                 (REQUIRED only field want to update)


            H: /getcomments/:videoId            (get)

                fields:
                    ################################

    tweet:
        tweetsSchema:
            owner
            content

        tweet Roughts:______________________________________________

            Note: prefix : /api/v1/tweets

            A: /                                (post)

                fields:
                    tweet


            B: /                                (get)

                fields:
                    ################################


            C: /:tweetId                        (delete)

                fields:
                    ################################



    playlist:
        playlistSchema:
            video
            playlistName
            description
            owner

        playlist Roughts:____________________________________________________

            A: /                                (post)

                fields:
                    playlistName        :       REQUIRED
                    description         :       REQUIRED


            B: /                                (get)

                fields:
                    ################################


            C: /:playlistId/:videoId?           (post)

                fields:
                    ################################

            D: /:playlistId/:videoId?           (delete)

                fields:
                    ################################

    subscriber's:
        subscriptionSchema:
            subscriber
            channel

    likes:
        likesSchema:
            video
            comment
            likedby

    comments:
        commentsSchema:
            video
            content
            owner
