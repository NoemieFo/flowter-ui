import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { ObjectTestType } from "./tuto";

export interface CardTestProps {
  title: string;
  description?: string;
  user?: ObjectTestType;
}

export const CardTest = ({
  title,
  description,
  user,
}: CardTestProps): JSX.Element => {
  return (
    <Card sx={{ minWidth: 275 }} className="test-card">
      <CardContent className="card-content">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          {description}
          <br />
          {user && (
            <span>
              {user.name ?? "undefined"} {user.firstname}
            </span>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
