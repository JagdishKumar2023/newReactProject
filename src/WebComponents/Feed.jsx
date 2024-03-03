import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export const Feed = () => {
  return (
    <Box bgcolor="pink" flex={2}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="100%"
          image="https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.jpg?s=612x612&w=0&k=20&c=5q09leP6_QnvdUEfsB6KUXDTTBJtl88bEwrDfRVNA0U="
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Dal bhat, a simple dish of lentils (dal) and rice (bhat) is Nepal’s
            national dish. While the dal and rice are simple elements, they are
            usually accompanied by tarkari (vegetable curry), achaar (pickled
            vegetables), sag (fired greens such as spinach) and a papad or two.
            A few years ago, my wife and I went on a two-week trek in the Nepali
            part of Himalaya and dal bhat was one of our favourite dishes we
            would order at the teahouses along the popular route up to Everest
            base camp. This veritable feast is great for adding fuel back after
            a long day of walking.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>

        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Dal Chawal Or Dal Roti: Which Is Better For Weight Loss? Experts
            RevealDal is one of the best sources of plant-based protein, and we
            can never have enough of it. But the question still remains. Dal
            chawal or dal roti? Which is the best meal combination for weight
            loss?Sushmita SenguptaUpdated: March 19, 2021 10:59 ISTRead Time:4
            min Dal Chawal Or Dal Roti: Which Is Better For Weight Loss? Experts
            Reveal Weight Loss: Dal is an excellent source protein and
            fibreHighlightsDal is a special kind of a lentil preperationDal
            chawal makes a source of complete proteinDal roti helps you cut back
            on simple carbs If you are trying to lose weight or are considering
            to lead a more 'fitter' life, you may have already learned about the
            importance of protein. Also referred to as the 'building block of
            life', protein helps build muscles, aid muscle recovery, support
            cell structure and boosts the health of skin, hair and nails. It
            also plays a crucial role in weight loss. Turns out, eating more
            protein-rich foods helps you feel full for a longer spell. It is not
            hard to understand how your satiety levels are linked with weight
            management. If you feel full, you would not be tempted to nibble
            into anything fattening that comes your way, thus minimising chances
            of weight gain.
          </Typography>
          <Typography paragraph>
            Dal Chawal Or Dal Roti: Which Is Better For Weight Loss? Experts
            RevealDal is one of the best sources of plant-based protein, and we
            can never have enough of it. But the question still remains. Dal
            chawal or dal roti? Which is the best meal combination for weight
            loss?Sushmita SenguptaUpdated: March 19, 2021 10:59 ISTRead Time:4
            min Dal Chawal Or Dal Roti: Which Is Better For Weight Loss? Experts
            Reveal Weight Loss: Dal is an excellent source protein and
            fibreHighlightsDal is a special kind of a lentil preperationDal
            chawal makes a source of complete proteinDal roti helps you cut back
            on simple carbs If you are trying to lose weight or are considering
            to lead a more 'fitter' life, you may have already learned about the
            importance of protein. Also referred to as the 'building block of
            life', protein helps build muscles, aid muscle recovery, support
            cell structure and boosts the health of skin, hair and nails. It
            also plays a crucial role in weight loss. Turns out, eating more
            protein-rich foods helps you feel full for a longer spell. It is not
            hard to understand how your satiety levels are linked with weight
            management. If you feel full, you would not be tempted to nibble
            into anything fattening that comes your way, thus minimising chances
            of weight gain. (Also Read: The Ideal Healthy Diet: Nutritional
            Values Of Roti And Rice Compared) c87c9438 Weight loss: Rice also
            contains a variety of nutrients Photo Credit: iStock Powered By
            VDO.AI Video Player is loading. Fortunately, there are many
            high-protein sources around us. While not everybody can have chicken
            and eggs every day but as Indians, we do have a habit of eating dal
            rather frequently. Moong dal, arhar dal, chana dal, urad dal, we
            have a wide repository of dals. It is one of the best sources of
            plant-based protein, and we can never have enough of it. But the
            question still remains. Dal chawal or dal roti? Which is the best
            meal combination for weight loss? We asked some experts and here is
            what they have to say.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 120 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
