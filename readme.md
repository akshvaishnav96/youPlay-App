you play application

: it is a video streaming app

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
        
            Note: prefix : api/v1/users

            A: /register                (post)  

                fields: 
                    userName    :   required
                    email       :   required
                    fullName    :   required
                    avatar      :   required
                    coverImage  :       -
                    password    :   required

            B: /Login                   (post)   

                fields: 
                    userLoginDetails    :   required (userName or email)
                    password            :   required


            C: /user-update             (patch)

                fields:
                    email               :       -
                    username            :       -
                    fullName            :       -

            D: /avatar-update           (patch)

                fields: 
                    avatar              :       required

            E: /cover-update            (patch)

                fields:
                    coverImage          :       required


            F: /delete-Cover-Image      (patch)

                fields
                        ################################


            G: /update-password         (patch)

                fields:
                    oldPassword         :   required
                    newPassword         :   required


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
