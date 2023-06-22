import { Grid, Typography, TextField } from "@mui/material";
import { OLBox, OLSectionBoxDark, OLSectionBox, OLImageBox, OLButton } from "../../styles/ol";
import { OLSectionLeft, OLSectionRight } from "../../styles/ol";
import { ThemeProvider } from '@mui/system';
import OLTheme from "../../styles/theme";

const spacing = 3
const imagetitle = "h7"

export function OLSection1({ matches }) {

    return (
        <OLSectionBox >
            <Grid container spacing={{ xs: 2, md: spacing }} >
                <Grid item xs={12}>
                    <OLBox>
                        <Typography variant="h2">OpenLang - Open World</Typography>
                    </OLBox>
                </Grid>
                <Grid item xs={12}>

                    <OLBox>
                        <Typography variant="h3">Prepare yourself for any official language test</Typography>
                    </OLBox>
                </Grid>
                <Grid item xs={12}>
                    <OLBox>
                        <OLImageBox component="img" src="/eng/ielts.png" />
                    </OLBox>
                </Grid>
                <Grid item xs={12}>
                    <OLBox>
                        <OLButton variant="contained" size="large">Try out</OLButton>
                    </OLBox>
                </Grid>
            </Grid>
        </OLSectionBox>

    );
}

export function OLSection2({ matches }) {

    return (
        <OLSectionBox>
            <Grid container spacing={{ xs: 2, md: spacing }}  >
                <Grid item xs={12}>
                    <OLBox>
                        <Typography variant="h2">Writing: How it Works?</Typography>
                    </OLBox>
                </Grid>
                <Grid item xs={12}>

                    <OLBox>
                        <Typography variant="h5" >It takes seconds to generate a band score for your essay. And take minutes to fix errors.</Typography>
                    </OLBox>
                </Grid>
                <Grid item xs={12}>
                    <OLBox>
                        <Grid container spacing={0} >
                            <Grid item xs={3}>
                                <OLBox />
                            </Grid>
                            <Grid item xs={2}>
                                <OLBox>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <OLImageBox component="img" src="/topic.png" />
                                            </OLBox >
                                        </Grid>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <Typography variant={imagetitle} >Type or paste your essay</Typography>
                                            </OLBox>
                                        </Grid>
                                    </Grid>

                                </OLBox>
                            </Grid>
                            <Grid item xs={2}>
                                <OLBox>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <OLImageBox component="img" src="/typing.png" />
                                            </OLBox >
                                        </Grid>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <Typography variant={imagetitle}>Press the 'Check Essay' button</Typography>
                                            </OLBox>
                                        </Grid>
                                    </Grid>

                                </OLBox>
                            </Grid>
                            <Grid item xs={2}>
                                <OLBox>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <OLImageBox component="img" src="/score.png" />
                                            </OLBox >
                                        </Grid>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <Typography variant={imagetitle}>Get your score!</Typography>
                                            </OLBox>
                                        </Grid>
                                    </Grid>

                                </OLBox>
                            </Grid>
                            <Grid item xs={3}>
                                <OLBox />
                            </Grid>
                        </Grid>
                    </OLBox>
                </Grid>
                <Grid item xs={12}>
                    <OLBox>
                        <OLButton variant="contained" size="large">Try out</OLButton>
                    </OLBox>
                </Grid>
            </Grid>
        </OLSectionBox>

    );
}


export function OLSection3({ matches }) {

    return (
        <OLSectionBox>
            <Grid container spacing={{ xs: 2, md: spacing }} >
                <Grid item xs={12}>
                    <OLBox>
                        <Typography variant="h2">Speaking: How it Works?</Typography>
                    </OLBox>
                </Grid>
                <Grid item xs={12}>

                    <OLBox>
                        <Typography variant="h5">Practice your speaking with virtual examinar!</Typography>
                    </OLBox>
                </Grid>
                <Grid item xs={12}>
                    <OLBox>
                        <Grid container spacing={0} >
                            <Grid item xs={3}>
                                <OLBox />
                            </Grid>
                            <Grid item xs={2}>
                                <OLBox>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <OLImageBox component="img" src="/topic.png" />
                                            </OLBox >
                                        </Grid>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <Typography variant={imagetitle} >Generate speaking topic</Typography>
                                            </OLBox>
                                        </Grid>
                                    </Grid>

                                </OLBox>
                            </Grid>
                            <Grid item xs={2}>
                                <OLBox>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <OLImageBox component="img" src="/record.png" />
                                            </OLBox >
                                        </Grid>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <Typography variant={imagetitle}>Record your answer</Typography>
                                            </OLBox>
                                        </Grid>
                                    </Grid>

                                </OLBox>
                            </Grid>
                            <Grid item xs={2}>
                                <OLBox>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <OLImageBox component="img" src="/score.png" />
                                            </OLBox >
                                        </Grid>
                                        <Grid item xs={12}>
                                        <OLBox>
                                            <Typography variant={imagetitle}>Get your score!</Typography>
                                            </OLBox>
                                        </Grid>
                                    </Grid>

                                </OLBox>
                            </Grid>
                            <Grid item xs={3}>
                                <OLBox />
                            </Grid>
                        </Grid>
                    </OLBox>
                </Grid>
                <Grid item xs={12}>
                    <OLBox>
                        <OLButton variant="contained" size="large">Try out</OLButton>
                    </OLBox>
                </Grid>
            </Grid>
        </OLSectionBox>

    );
}


export function OLSection4({ matches }) {

    return (
        <OLSectionBox>
            <Grid container spacing={{ xs: 2, md: spacing }} >
            <Grid item xs={12}>
                    <OLBox>
                        <Typography variant="h2">Speaking: How it Works?</Typography>
                    </OLBox>
                </Grid>
                <Grid item xs={12}>
                    <OLBox>
                        <OLButton variant="h2">generate question</OLButton>
                        <TextField style={{ textAlign: 'left' }}
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={20} id="IeltsIputText" onChange={console.log("alala")}
            />
                    </OLBox>
                </Grid>

            </Grid>
            
        </OLSectionBox>

    );
}



