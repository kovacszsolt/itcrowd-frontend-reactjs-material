import React, {Fragment} from 'react';
import './Category.css';
import withStyles from "@material-ui/core/styles/withStyles";
import Chip from "@material-ui/core/Chip/Chip";

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
    },
});

function AppListCardCategory(param) {
    const classes = param.classes;
    const categoryList = param.category;
    return (
        <Fragment>
            {
                categoryList.map((category) => {
                    return (
                        <Chip
                            key={category._id}
                            label={category.title}
                            className={classes.chip}
                            color="primary"
                            component="a"
                            href={'/tag/' + category.slug}
                            clickable
                        />
                    )
                })
            }
        </Fragment>
    )
}

export default withStyles(styles)(AppListCardCategory);
